import messageServices from '../services/message.services.js'

class MessagesController {
  async allMessages () {
    return await messageServices.getAllMessages()
  }

  async addMessage (message) {
    return await messageServices.writeNewMessage(message)
  }
}

export default new MessagesController()
