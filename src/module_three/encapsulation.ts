class User {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const user = new User("sohan");
// console.log(user.name);

// private

class BankAccount {
  private balance: number = 5000;
  getBalance(): number {
    return this.balance;
  }

  deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error("Invalid amount");
    }

    this.balance += amount;
  }
}

const accont = new BankAccount();
accont.deposit(2000);
console.log(accont.getBalance());
