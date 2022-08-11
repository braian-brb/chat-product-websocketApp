import messageServicesGraphql from '../../services/graphQL/message.services.graphql.js'

class MessageControllerGraphQL {
  async allMessages () {
    return await messageServicesGraphql.getAll()
  }

  async message (id) {
    return await messageServicesGraphql.getById(id)
  }

  async addMessage (message) {
    return await messageServicesGraphql.save(message)
  }

  async updateMessage (message) {
    // console.log(message)
    return await messageServicesGraphql.update(message)
  }

  async deleteMessage (id) {
    return await messageServicesGraphql.delete(id)
  }
}

export default new MessageControllerGraphQL()
