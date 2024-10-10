import TaskDto from '../dtos/task.dto.js'
import taskModul from '../models/task.module.js'
import BaseError from '../errors/base.error.js'

class TaskService {
    async getAll() {
        const tasks = await taskModul.find()

        return {Task: tasks}
    }

    async getById(id) {
        const foundTask = await taskModul.findById(id)

        if (!foundTask) {
            throw BaseError.NotFound('Task not found')
        }

        return {Task: foundTask}
    }

    async create (body) {
        const newTask = await taskModul.create(body)

        const Task = new TaskDto(newTask)

        return {Task: Task}
    }

    async update (body, id) {
        const foundTask = await taskModul.findById(id)

        if (!foundTask) {
            throw BaseError.NotFound('Task not found')
        }

        const Task = await taskModul.findByIdAndUpdate(id, body, { new: true })

        const upTask = new TaskDto(Task)

        return {Task: upTask}
    }

    async delete(TaskId) {
        const foundTask = await taskModul.findById(TaskId)

        if (!foundTask) {
            throw BaseError.NotFound('Task not found')
        }

        await taskModul.findByIdAndDelete(TaskId)

        return {deletedTask: foundTask}
    }
}

export default new TaskService()