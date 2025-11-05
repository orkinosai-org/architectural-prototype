import express from 'express'
import multer from 'multer'
import { createStorageAdapter } from '../storage/factory'
import { idempotencyMiddleware } from '../middleware/idempotency'

const upload = multer({ storage: multer.memoryStorage() })
const router = express.Router()
const storage = createStorageAdapter()

router.post('/upload', idempotencyMiddleware, upload.single('file'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'No file uploaded' })
    const container = process.env.AZURE_BLOB_CONTAINER || 'prototype-uploads'
    const filename = `${Date.now()}-${req.file.originalname}`
    const result = await storage.uploadBuffer(container, req.file.buffer, filename, req.file.mimetype)
    return res.json({ ok: true, blobUrl: result.url })
  } catch (err) {
    return res.status(500).json({ error: 'Upload failed' })
  }
})

export default router
