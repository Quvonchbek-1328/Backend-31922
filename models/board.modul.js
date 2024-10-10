import { model, Schema } from 'mongoose'

const boardSchema = new Schema(
  {
    boardTitle: { type: String, required: true },
    collaborators: { type: Array, required: false}
  },
  { timestamps: true }
)

export default model('Boards', boardSchema)
