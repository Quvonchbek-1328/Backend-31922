import boardService from '../services/board.service.js'

<<<<<<< HEAD
class boardController {
    async getAll(req, res, next) {
        try {
            const boards = await boardService.getAll()

            res.status(201).json(boards)
        } catch (error) {
            next(error)
        }
    }

    async getById(req, res, next) {
        try {
            const foundBoard = await boardService.getById(req.params.id)

            res.status(200).json(foundBoard)
        } catch (error) {
            next(error)
        }
    }

    async create(req, res, next) {
        try {
            const board = await boardService.create(req.body)

            res.status(200).json(board)
        } catch (error) {
            next(error)
        }
    }

    async update(req, res, next) {
        try {
            const updateBoard = await boardService.update(req.body, req.params.id)

            res.status(200).json(updateBoard)
        } catch (error) {
            next(error)
        }
    }

    async deleted(req, res, next) {
        try {
            const deleteBoard = await boardService.delete(req.params.id)

            res.status(201).json(deleteBoard)
        } catch (error) {
            next(error)
        }
    }
}

export default new boardController()
=======
class BoardController {
  async addBoard(req, res, next) {
    try {
      const board = await boardService.addBoard(req.body.title, req.user.id)
      res.status(201).json(board)
    } catch (error) {
      next(error)
    }
  }
  async getBoard(req, res, next) {
    try {
      const board = await boardService.getBoard(req.params.boardId)
      res.status(200).json(board)
    } catch (error) {
      next(error)
    }
  }
  async getBoards(req, res, next) {
    try {
      const boards = await boardService.getBoards()
      res.status(200).json(boards)
    } catch (error) {
      next(error)
    }
  }
  async editBoard(req, res, next) {
    try {
      const board = await boardService.editBoard(req.params.boardId, req.body.title)
      res.status(200).json(board)
    } catch (error) {
      next(error)
    }
  }
  async deleteBoard(req, res, next) {
    try {
      await boardService.deleteBoard(req.params.boardId, req.user.id)
      res.status(200).json({ message: 'Board deleted successfully' })
    } catch (error) {
      next(error)
    }
  }
}

export default new BoardController()
>>>>>>> 39745dd1edeb9abe98bf288b1c92241b1504fa1a
