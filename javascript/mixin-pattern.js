class Dog {
  constructor(name) {
    this.name = name
  }
}

const dogFunctionality = {
  bark() {
    console.log(`${this.name} says Woof!`)
  },
  walk() {
    console.log(`${this.name} is walking`)
  },
  run() {
    console.log(`${this.name} is running`)
  }
}

Object.assign(Dog.prototype, dogFunctionality)

const dog1 = new Dog("Buddy")

dog1.bark()
dog1.walk()
dog1.run()