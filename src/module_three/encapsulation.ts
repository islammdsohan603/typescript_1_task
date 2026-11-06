// Encapsulation problem

class BankAccount {
  private balance: number = 5000;
  deposit(amount: number) {
    if (amount <= 0) {
      throw new Error("Invalid deposit amount");
    }

    this.balance += amount;
  }

  withdraw(amount: number) {
    if (amount <= 0 || amount > this.balance) {
      throw new Error("Invalid withdrawal amount");
    }
    this.balance -= amount;
  }

  getBalance(): number {
    return this.balance;
  }
}

const account = new BankAccount();

account.deposit(20000);
account.withdraw(15000);
console.log(account.getBalance());
