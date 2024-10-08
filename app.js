import express from 'express'
import connectDatabase from './database/mongo.database.js'
import { config } from 'dotenv'

const app = express()

config()

const port = process.env.PORT || 5000

app.listen(port, async () => {
  await connectDatabase()
  console.log(`Listening on http://localhost:${port}`)
})
