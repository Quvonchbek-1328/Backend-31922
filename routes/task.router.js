import { Router } from 'express'
import taskController from '../controllers/task.controller.js'

const taskRouter = Router()

taskRouter.get('/', taskController.getAll)
taskRouter.get('/:id', taskController.getById)
taskRouter.post('/create', taskController.create)
taskRouter.put('/update/:id', taskController.update)
taskRouter.delete('/:id', taskController.deleted)

export default taskRouter