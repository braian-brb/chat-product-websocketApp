import { containerMessages } from '../daos/index.js'

class MessageService {
  async getAllMessages () {
    return await containerMessages.getAll()
  }

  async writeNewMessage (message) {
    return await containerMessages.save(message)
  }
}

export default new MessageService()
