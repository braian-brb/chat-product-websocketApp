import User from '../models/User.js'

class UserService {
  async getUser (condition) {
    console.log(condition)
    return await User.findOne({ email: condition })
  }

  async createNewUser (name, email, password) {
    return await new User({ name, email, password })
  }

  async encryptPasswordNewUser (newUser, password) {
    return await newUser.encryptPassword(password)
  }

  async saveNewUser (newUser) {
    return await newUser.save()
  }
}

export default new UserService()
