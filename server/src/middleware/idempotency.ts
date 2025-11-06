import { Request, Response, NextFunction } from 'express'

const seen = new Map<string, any>()
const TTL = 1000 * 60 * 5 // 5 minutes

export function idempotencyMiddleware(req: Request, res: Response, next: NextFunction) {
  const key = req.header('Idempotency-Key')
  if (!key) return next()
  if (seen.has(key)) {
    // Return previously stored result for prototype (simple behavior)
    const cached = seen.get(key)
    return res.json({ ok: true, cached: true, ...cached })
  }
  // capture send to store response
  const originalJson = res.json.bind(res)
  res.json = (body: any) => {
    seen.set(key, body)
    setTimeout(() => seen.delete(key), TTL)
    return originalJson(body)
  }
  next()
}
