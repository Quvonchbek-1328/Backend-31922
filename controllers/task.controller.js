import taskService from '../services/task.service.js'

class taskController {
    async getAll(req, res, next) {
        try {
            const tasks = await taskService.getAll()

            res.status(201).json(tasks)
        } catch (error) {
            next(error)
        }
    }

    async getById(req, res, next) {
        try {
            const foundTask = await taskService.getById(req.params.id)

            res.status(200).json(foundTask)
        } catch (error) {
            next(error)
        }
    }

    async create(req, res, next) {
        try {
            const task = await taskService.create(req.body)

            res.status(200).json(task)
        } catch (error) {
            next(error)
        }
    }

    async update(req, res, next) {
        try {
            const updateTask = await taskService.update(req.body, req.params.id)

            res.status(200).json(updateTask)
        } catch (error) {
            next(error)
        }
    }

    async deleted(req, res, next) {
        try {
            const deleteTask = await taskService.delete(req.params.id)

            res.status(201).json(deleteTask)
        } catch (error) {
            next(error)
        }
    }
}

export default new taskController()