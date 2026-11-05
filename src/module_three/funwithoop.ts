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

console.log(emailInput.render());
