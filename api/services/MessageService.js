class Message {
  constructor (type, statusCode, message, data) {
    this.type = type
    this.statusCode = statusCode
		this.message = message
    this.data = data
  }

	sendMessage() {
    const result = {
			status: this.type,
			statusCode: this.statusCode,
      message: this.message,
      data: this.data
    }

    if (this.type === 'success') {
      return result
    }
    return {
			status: this.type,
			statusCode: this.statusCode,
      message: this.message
    }
  }
}

export default Message