class Employee {
  readonly id: number | string;
  name: string;
  email: string;

  constructor(id: number | string, name: string, email: string) {
    ((this.id = id), (this.name = name), (this.email = email));
  }
}

class Developer extends Employee {
  developer: string;

  constructor(
    id: number | string,
    name: string,
    email: string,
    developer: string,
  ) {
    super(id, name, email);
    this.developer = developer;
  }
  writeCode(): void {
    console.log(
      `${this.name} is writing ${this.developer} code and his id${this.id}`,
    );
  }
}

class Designer extends Employee {
  designTool: string;
  constructor(
    id: number | string,
    name: string,
    email: string,
    designTool: string,
  ) {
    super(id, name, email);
    this.designTool = designTool;
  }

  designUI(): void {
    console.log(
      `${this.name} is designing with ${this.designTool} his email is${this.email}`,
    );
  }
}

const developer = new Developer(
  "  141",
  "sohan",
  "sohan@gmail.com",
  "TypeScript",
);

const deigner = new Designer(145, "MD.SOHAN", "islam@gmail.com", "PhotoShop");

deigner.designUI();

developer.writeCode();
