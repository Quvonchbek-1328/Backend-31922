import taskService from '../services/task.service.js'

<<<<<<< HEAD
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
=======
class TaskController {
  async addTask(req, res, next) {
    try {
      const task = await taskService.addTask(req.body.title, req.params.projectId)
      res.status(201).json(task)
    } catch (error) {
      next(error)
    }
  }
  async getTask(req, res, next) {
    try {
      const task = await taskService.getTask(req.params.taskId)
      res.status(200).json(task)
    } catch (error) {
      next(error)
    }
  }
  async getTasks(req, res, next) {
    try {
      const tasks = await taskService.getTasks()
      res.status(200).json(tasks)
    } catch (error) {
      next(error)
    }
  }
  async editTask(req, res, next) {
    try {
      const task = await taskService.editTask(req.params.taskId, req.body)
      res.status(200).json(task)
    } catch (error) {
      next(error)
    }
  }
  async deleteTask(req, res, next) {
    try {
      await taskService.deleteTask(req.params.taskId)
      res.status(200).json({ message: 'Task deleted successfully' })
    } catch (error) {
      next(error)
    }
  }
}

export default new TaskController()
>>>>>>> 39745dd1edeb9abe98bf288b1c92241b1504fa1a
