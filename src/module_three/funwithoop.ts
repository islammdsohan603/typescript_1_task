class Students {
  name: string;
  email: string;

  constructor(name: string, email: string) {
    ((this.name = name), (this.email = email));
  }

  getDisplay(): void {
    console.log(`${this.name} and his email ${this.email}`);
  }
}

const student1 = new Students("sohan", "silam@gmail.com");

student1.getDisplay();
