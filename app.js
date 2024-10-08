import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import connectDatabase from './database/mongo.database.js'
import authRouter from './routes/auth.route.js'

const app = express()

dotenv.config()

app.use(express.json())
app.use(cookieParser())

app.use('/api/auth', authRouter)

const port = process.env.PORT || 5000

app.listen(port, async () => {
  await connectDatabase()
  console.log(`Listening on http://localhost:${port}`)
})
