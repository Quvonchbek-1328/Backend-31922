import boardService from '../services/board.service.js'

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