import { generateVerificationCode, sendVerificationEmail } from '../emailService'

type Pending = {
  name: string
  email: string
  eventId: string
  verificationCode: string
  createdAt: number
  expiresAt: number
}

const PENDING_EXPIRY = Number(process.env.VERIFICATION_CODE_EXPIRY_MINUTES || 15)

const pending: Record<string, Pending> = {}
const completed: Record<string, any> = {}

export const authService = {
  async register(name: string, email: string, eventId: string) {
    if (completed[email]) throw new Error('Email already registered')
    const code = generateVerificationCode()
    const now = Date.now()
    pending[email] = { name, email, eventId, verificationCode: code, createdAt: now, expiresAt: now + PENDING_EXPIRY * 60 * 1000 }
    const sent = await sendVerificationEmail({ recipientEmail: email, verificationCode: code, name, eventName: eventId })
    if (!sent) throw new Error('Failed to send verification email')
    return { email }
  },
  async verify(email: string, code: string) {
    const p = pending[email]
    if (!p) throw new Error('No pending registration')
    if (Date.now() > p.expiresAt) { delete pending[email]; throw new Error('Verification code expired') }
    if (p.verificationCode !== code) throw new Error('Invalid verification code')
    completed[email] = { name: p.name, email: p.email, eventId: p.eventId, registeredAt: new Date().toISOString() }
    delete pending[email]
    return { email }
  }
}
