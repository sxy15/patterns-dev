class User {
  constructor({firstName, lastName, email}) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const user1 = new User({
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@de.com'
})

const user2 = new User({
  firstName: 'Jane',
  lastName: 'Doe',
  email: 'jane@deo.com'
})

console.log(user1)
console.log(user2)