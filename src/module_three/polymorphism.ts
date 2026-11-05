class BankAccount {
  readonly accId: number;
  accHolderName: string;
  private accBalance: number;

  constructor(id: number, name: string, balance: number) {
    if (balance < 0) {
      throw new Error("Initial balance cannot be negative");
    }

    this.accId = id;
    this.accHolderName = name;
    this.accBalance = balance;
  }

  deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error("Invalid deposit amount");
    }

    this.accBalance += amount;
  }

  withdraw(amount: number): void {
    if (amount <= 0 || amount > this.accBalance) {
      throw new Error("Invalid withdrawal amount");
    }

    this.accBalance -= amount;
  }

  getBalance(): number {
    return this.accBalance;
  }

  getAccountInfo(): void {
    console.log({
      accId: this.accId,
      accHolderName: this.accHolderName,
      accBalance: this.accBalance,
    });
  }
}

const userAccount = new BankAccount(145, "Sohan", 14584);

userAccount.deposit(589000);
userAccount.withdraw(5000);

userAccount.getAccountInfo();

console.log("Current Balance:", userAccount.getBalance());
