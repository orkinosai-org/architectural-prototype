import { z } from 'zod'

const envSchema = z.object({
  NODE_ENV: z.string().optional(),
  PORT: z.string().optional(),
  SMTP_HOST: z.string().optional(),
  SMTP_PORT: z.string().optional(),
  SMTP_USER: z.string().optional(),
  SMTP_PASS: z.string().optional(),
  EMAIL_FROM: z.string().optional(),
  AZURE_STORAGE_CONNECTION_STRING: z.string().optional(),
  AZURE_BLOB_CONTAINER: z.string().optional(),
  STORAGE_PROVIDER: z.string().optional(),
  VERIFICATION_CODE_EXPIRY_MINUTES: z.string().optional(),
  TRANSLATE_API_URL: z.string().optional(),
})

export const env = envSchema.parse(process.env)
