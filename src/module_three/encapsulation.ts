// Encapsulation problem

//  public

// class User {
//   public name: string = "sohan";
// }

// const user = new User();
// user.name = "Rahima";
// console.log(user.name);

// private

class User {
  private password: string = "12345we";
  checkPassword(): void {
    console.log(this.password);
  }
}

const user = new User();
user.checkPassword();

// protceted

class Employee {
  protected salary: number = 5000;
}

class Developer extends Employee {
  showSalary(): void {
    console.log(this.salary);
  }
}

const developer = new Developer();
developer.showSalary();
