// class

class User {
  // properties,methods, constructor

  userName: string;
  userAge: number;

  constructor(userName: string, userAge: number) {
    this.userName = userName;
    this.userAge = userAge;
  }

  display(): void {
    console.log(`User Name is ${this.userName} and age is ${this.userAge}`);
  }
}

// class object

let user1 = new User("MD.SOHAN", 21);
let user2 = new User("MD.SOHAG", 11);
user1.display();
user2.display();
