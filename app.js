import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import connectDatabase from './database/mongo.database.js'
import authRouter from './routes/auth.route.js'
import errorMiddleware from './middlewares/error.middleware.js'

const app = express()

dotenv.config()

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }))
app.use(express.json())
app.use(cookieParser())

app.use('/api/auth', authRouter)

app.use(errorMiddleware)

const port = process.env.PORT || 5000

app.listen(port, async () => {
  await connectDatabase()
  console.log(`Listening on http://localhost:${port}`)
})
