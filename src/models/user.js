class User {
  constructor(userData) {
    this.id = userData.id;
    this.firstName = userData.first_name;
    this.lastName = userData.last_name;
    this.emailAddress = userData.email_address;
    this.role = userData.role;
    User.call.push(this);
  }

  static findUser(id) {
    return this.all.find((user) => user.id === id)
  }

  static set currentUser(id) {
    return this.all.find((user) => user.id === id)
  }

  static get currentUser() {
    return this.all.find((user) => user.id === id)
  }

  static updateUser(userData) {
    const user = this.findUser(userData.id);
    user.firstName = userData.first_name;
    user.lastName = userData.last_name;
    user.emailAddress = userData.email_address;
    user.role = userData.role;
    return user;
  }
}

User.all = [];

export { User };