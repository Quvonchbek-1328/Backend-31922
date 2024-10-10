import TaskDto from '../dtos/task.dto.js'
<<<<<<< HEAD
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
=======
import taskModel from '../models/task.model.js'
import projectService from './project.service.js'

class TaskService {
  async addTask(title, projectId) {
    const task = await taskModel.create({ title, project: projectId })
    await projectService.addTask(projectId, task._id)
    const taskDto = new TaskDto(task)
    return { task: taskDto }
  }
  async getTask(taskId) {
    const task = await taskModel.findById(taskId).populate('project')
    const taskDto = new TaskDto(task)
    return { task: taskDto }
  }
  async getTasks() {
    const tasks = await taskModel.find().populate('project')
    const taskDtos = tasks.map(task => new TaskDto(task))
    return { tasks: taskDtos }
  }
  async editTask(taskId, body) {
    const task = await taskModel.findByIdAndUpdate(taskId, { ...body }, { new: true })
    const allTasks = await taskModel.find({ project: task.project })
    const allTasksNum = allTasks.length
    const checkedTasksNum = allTasks.filter(task => task.checked).length
    const progress = Math.round((checkedTasksNum / allTasksNum) * 100)
    await projectService.editTask(task.project, progress)
    const taskDto = new TaskDto(task)
    return { task: taskDto }
  }
  async deleteTask(taskId) {
    const task = await taskModel.findByIdAndDelete(taskId)
    await projectService.deleteTask(task.project, task._id)
  }
  async deleteProject(projectId) {
    await taskModel.deleteMany({ project: projectId })
  }
}

export default new TaskService()
>>>>>>> 39745dd1edeb9abe98bf288b1c92241b1504fa1a
