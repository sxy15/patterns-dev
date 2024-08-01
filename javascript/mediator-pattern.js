// 中介/中间件模式

class ChatRoom {
  logMessage(user, message) {
    const time = new Date().toUTCString()
    const sender = user.getName()

    console.log(`${time} [${sender}]: ${message}`)
  }
}

class User {
  constructor(name, chatroom) {
    this.name = name
    this.chatroom = chatroom
  }

  getName() {
    return this.name
  }

  send(message) {
    this.chatroom.logMessage(this, message)
  }
}

const chatroom = new ChatRoom()
const user1 = new User("Alice", chatroom)
const user2 = new User("Bob", chatroom)

user1.send("Hello, Bob!")
user2.send("Hello, Alice!")