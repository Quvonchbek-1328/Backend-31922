import { model, Schema } from 'mongoose'

const userSchema = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    pass: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
)

export default model('User', userSchema)
