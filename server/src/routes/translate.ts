import express from 'express'
import fetch from 'node-fetch'

const router = express.Router()
const TRANSLATE_API = process.env.TRANSLATE_API_URL || 'https://libretranslate.de/translate'

router.post('/translate', async (req, res) => {
  try {
    const { q, source, target } = req.body
    if (!q) return res.status(400).json({ error: 'q (text) is required' })
    const resp = await fetch(TRANSLATE_API, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ q, source: source || 'auto', target }) })
    const data = await resp.json()
    return res.json({ ok: true, result: data })
  } catch (err) {
    return res.status(500).json({ error: 'Translate failed' })
  }
})

export default router
