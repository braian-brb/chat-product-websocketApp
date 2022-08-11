class Message {
  constructor (email, message) {
    this.email = email
    this.message = message
    this.date = new Date().toLocaleString()
  }
}

export default Message
