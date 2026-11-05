abstract class UIComponent {
  constructor(
    public id: string,
    public placeholder: string,
  ) {}

  abstract render(): string;
}

class Input extends UIComponent {
  constructor(
    public type: string,
    id: string,
    placeholder: string,
  ) {
    super(id, placeholder);
  }

  render(): string {
    return `<input type="${this.type}" id="${this.id}" placeholder="${this.placeholder}" />`;
  }
}

const emailInput = new Input("email", "email", "Enter your email");

const passwordInput = new Input("password", "password", "Enter your password");

const textInput = new Input("text", "username", "Enter your username");

console.log(emailInput.render());
console.log(passwordInput.render());
console.log(textInput.render());
