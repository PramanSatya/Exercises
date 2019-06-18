class User {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }

  compareAge(user) {
    let generic = " is older than "
    if(this.age > user.age)
      return this.name + generic + user.name;
    else
      return user.name + generic + this.name;
  }
}
let user1 = new User("john", 16);
let user2 = new User("priya", 20);
console.log(user1.compareAge(user2));
