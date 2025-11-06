import express from 'express'
import path from 'path'
import cors from 'cors'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import authRouter from './routes/auth'
import uploadRouter from './routes/upload'
import translateRouter from './routes/translate'
import { logger } from './logger'
import './config/env'

const app = express()
const PORT = process.env.PORT || 4000

app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(rateLimit({ windowMs: 60 * 1000, max: 100 }))

app.use('/api', authRouter)
app.use('/api', uploadRouter)
app.use('/api', translateRouter)

app.get('/health', (req, res) => res.json({ status: 'healthy', timestamp: new Date().toISOString() }))

// Serve client build if present
const CLIENT_BUILD = path.join(__dirname, '..', '..', 'client', 'build')
app.use(express.static(CLIENT_BUILD))
app.get('*', (req, res) => res.sendFile(path.join(CLIENT_BUILD, 'index.html')))

app.listen(PORT, () => logger.info(`Server listening on ${PORT}`))
