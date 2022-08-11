import { containerMessages } from '../../daos/index.js'
import { Message } from '../../models/graphQL/Message.js'

class MessageServiceGraphQL {
  async getAll () {
    return await containerMessages.getAll()
  }

  async getById (id) {
    return await containerMessages.getById(id)
  }

  // corregir para que funcione con data tambien
  async save ({ email, message }) {
    console.log(email, message)
    const newMessage = new Message(email, message)
    const messageCreated = await containerMessages.create(newMessage)
    const savedMessage = {
      id: (typeof messageCreated !== 'object') ? messageCreated : messageCreated.id,
      ...newMessage
    }
    return savedMessage
  }

  async update ({ id, data }) {
    const { email, message } = data
    const newMessage = new Message(email, message)
    return await containerMessages.updateById(id, newMessage)
  }

  async delete (id) {
    return await containerMessages.deleteById(id)
  }
}

export default new MessageServiceGraphQL()
