import messageServices from '../services/message.services.js'

class MessagesController {
  async getAllMessages () {
    return await messageServices.getAllMessages()
  }

  async writeNewMessage (message) {
    return await messageServices.writeNewMessage(message)
  }
}

export default new MessagesController()
