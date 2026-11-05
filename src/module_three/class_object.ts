// students class

class Students {
  readonly id: number;
  name: string;
  age: number;

  constructor(id: number, name: string, age: number) {
    ((this.id = id), (this.name = name), (this.age = age));
  }

  getStudentsInfo(): void {
    console.log(
      `Students name is ${this.name} his id is: ${this.id} and age ${this.age}`,
    );
  }
}

const students1 = new Students(101, "sohan", 21);
const students2 = new Students(11, "sohan islam", 20);

students1.getStudentsInfo();
students2.getStudentsInfo();
