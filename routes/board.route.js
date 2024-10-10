import { Router } from 'express'
import boardController from '../controllers/board.controller.js'

const boardRouter = Router()

boardRouter.get('/', boardController.getAll)
boardRouter.get('/:id', boardController.getById)
boardRouter.post('/create', boardController.create)
boardRouter.put('/update/:id', boardController.update)
boardRouter.delete('/:id', boardController.deleted)

export default boardRouter