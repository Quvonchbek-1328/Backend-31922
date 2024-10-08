import { Router } from 'express'
import authController from '../controllers/auth.controller.js'

const authRouter = Router()

authRouter.post('/signup', authController.signup)
authRouter.post('/signin', authController.signin)
authRouter.delete('/signout', authController.signout)
authRouter.get('/getuser/:id', authController.getUser)
authRouter.get('/getusers', authController.getUsers)
authRouter.get('/refresh', authController.refresh)
authRouter.post('/forgot-pass', authController.forgotPass)
authRouter.post('/set-newpass', authController.setNewPass)

export default authRouter
