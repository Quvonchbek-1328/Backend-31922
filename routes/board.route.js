import { Router } from 'express'
import boardController from '../controllers/board.controller.js'
<<<<<<< HEAD

const boardRouter = Router()

boardRouter.get('/', boardController.getAll)
boardRouter.get('/:id', boardController.getById)
boardRouter.post('/create', boardController.create)
boardRouter.put('/update/:id', boardController.update)
boardRouter.delete('/:id', boardController.deleted)

export default boardRouter
=======
import authMiddleware from '../middlewares/auth.middleware.js'
import authorMiddleware from '../middlewares/author.middleware.js'

const boardRouter = Router()

boardRouter.post('/create', authMiddleware, boardController.addBoard)
boardRouter.get('/getboard/:boardId', authMiddleware, boardController.getBoard)
boardRouter.get('/getboards', authMiddleware, boardController.getBoards)
boardRouter.put('/update/:boardId', authMiddleware, authorMiddleware, boardController.editBoard)
boardRouter.delete(
  '/delete/:boardId',
  authMiddleware,
  authorMiddleware,
  boardController.deleteBoard
)

export default boardRouter
>>>>>>> 39745dd1edeb9abe98bf288b1c92241b1504fa1a
