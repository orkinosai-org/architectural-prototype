import express from 'express'
import { body, validationResult } from 'express-validator'
import { authService } from '../services/authService'
const router = express.Router()

router.post('/register', body('name').isString().notEmpty(), body('email').isEmail(), body('eventId').isString().notEmpty(), async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() })
  try {
    const { name, email, eventId } = req.body
    const r = await authService.register(name, email, eventId)
    return res.json({ ok: true, ...r })
  } catch (err: any) {
    return res.status(400).json({ error: err.message })
  }
})

router.post('/verify', body('email').isEmail(), body('verificationCode').isString().notEmpty(), async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() })
  try {
    const { email, verificationCode } = req.body
    const r = await authService.verify(email, verificationCode)
    return res.json({ ok: true, ...r })
  } catch (err: any) {
    return res.status(400).json({ error: err.message })
  }
})

export default router
