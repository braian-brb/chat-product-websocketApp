import mongoose from 'mongoose'
import bcryptjs from 'bcryptjs'
const { Schema, model } = mongoose

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
}, {
  timestamps: true
}
)

UserSchema.methods.encryptPassword = async password => {
  const salt = await bcryptjs.genSalt(10)
  const encryptPassword = await bcryptjs.hash(password, salt)
  return encryptPassword
}
// No uso funcion flecha por el this
UserSchema.methods.matchPassword = async function (password) {
  const resBoolean = await bcryptjs.compare(password, this.password)
  return resBoolean
}

export default model('User', UserSchema)
