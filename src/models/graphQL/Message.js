import { buildSchema } from 'graphql'

class Message {
  constructor (email, message) {
    this.email = email
    this.message = message
    this.date = new Date().toLocaleString()
  }
}

const schema = buildSchema(`
  type Message {
    id: ID!
    email: String,
    message: String,
    date: String
  }
  input MessageInput {
    email: String,
    message: String,
  }
  type Query {
    allMessages(campo: String, valor: String): [Message],
    message(id: ID!): Message
  }
  type Mutation { 

    addMessage(
      email: String,
      message: String,
    ): Message,
    updateMessage(id: ID!, data: MessageInput): Message
    deleteMessage(id: ID!): Message,

  }
`)

export { Message, schema }
