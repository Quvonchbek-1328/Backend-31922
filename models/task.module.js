import { model, Schema } from 'mongoose'

const taskSchema = new Schema(
  {
    title: { type: String, required: true },
    subTitle: { type: String, required: false },
    description: { type: String, required: false },
    status: { type: String, required: false },
  },
  { timestamps: true }
)

export default model('Tasks', taskSchema)
