import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import connectDatabase from './database/mongo.database.js'
import authRouter from './routes/auth.route.js'
import boardRouter from './routes/board.route.js'
import taskRouter from './routes/task.router.js'
import errorMiddleware from './middlewares/error.middleware.js'
import boardRouter from './routes/board.route.js'
import projectRouter from './routes/project.route.js'
import taskRouter from './routes/task.route.js'

const app = express()

dotenv.config()

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }))
app.use(express.json())
app.use(cookieParser())

app.use('/api/auth', authRouter)
app.use('/api/board', boardRouter)
<<<<<<< HEAD
=======
app.use('/api/project', projectRouter)
>>>>>>> 39745dd1edeb9abe98bf288b1c92241b1504fa1a
app.use('/api/task', taskRouter)

app.use(errorMiddleware)

const port = process.env.PORT || 5000

app.listen(port, async () => {
  await connectDatabase()
  console.log(`Listening on http://localhost:${port}`)
})
