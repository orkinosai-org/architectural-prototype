import { Request, Response, NextFunction } from 'express'
import fetch from 'node-fetch'

const RECAPTCHA_SECRET = process.env.RECAPTCHA_SECRET
const ALLOW_DEV_CAPTCHA = process.env.ALLOW_DEV_CAPTCHA === 'true'

export async function captchaMiddleware(req: Request, res: Response, next: NextFunction) {
  const token = req.body?.captchaToken || req.header('Captcha-Token')

  // If no recaptcha secret configured, allow only the dev token if ALLOW_DEV_CAPTCHA
  if (!RECAPTCHA_SECRET) {
    if (ALLOW_DEV_CAPTCHA && token === 'fake-captcha-token') {
      return next()
    }
    console.warn('RECAPTCHA_SECRET not configured. Rejecting non-dev captcha attempts.')
    return res.status(403).json({ error: 'Captcha not configured' })
  }

  if (!token) return res.status(400).json({ error: 'captchaToken is required' })

  try {
    const resp = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${encodeURIComponent(RECAPTCHA_SECRET)}&response=${encodeURIComponent(token)}`
    })
    const data = await resp.json()
    // `success` should be true; for v3 there is a score; for v2 success suffices
    if (data.success) return next()
    console.warn('Captcha validation failed', data)
    return res.status(403).json({ error: 'Captcha validation failed' })
  } catch (err: any) {
    console.error('Captcha verification error', err)
    return res.status(500).json({ error: 'Captcha verification failed' })
  }
}