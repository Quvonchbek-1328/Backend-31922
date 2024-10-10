import BoardDto from '../dtos/board.dto.js'
import boardModul from '../models/board.modul.js'
import BaseError from '../errors/base.error.js'

class BoardService {
    async getAll() {
        const boards = await boardModul.find()

        return {board: boards}
    }

    async getById(id) {
        const foundBoard = await boardModul.findById(id)

        if (!foundBoard) {
            throw BaseError.NotFound('Board not found')
        }

        return {Board: foundBoard}
    }

    async create (body) {
        const newBoard = await boardModul.create(body)

        const board = new BoardDto(newBoard)

        return {board: board}
    }

    async update (body, id) {
        const foundBoard = await boardModul.findById(id)

        if (!foundBoard) {
            throw BaseError.NotFound('Board not found')
        }

        const board = await boardModul.findByIdAndUpdate(id, body, { new: true })

        const upBoard = new BoardDto(board)

        return {board: upBoard}
    }

    async delete(boardId) {
        const foundBoard = await boardModul.findById(boardId)

        if (!foundBoard) {
            throw BaseError.NotFound('Board not found')
        }

        await boardModul.findByIdAndDelete(boardId)

        return {deletedBoard: foundBoard}
    }
}

export default new BoardService()