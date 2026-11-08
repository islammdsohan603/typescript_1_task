// Problem 1 — Bank Account
// একজন Customer-এর Bank Account তৈরি করবে।

// Requirements:
// - readonly accountId: number
// - accountHolder: string
// - private balance: number
// - getBalance() → Balance দেখাবে।
// - deposit(amount) → টাকা জমা করবে।
// - withdraw(amount) → টাকা উত্তোলন করবে।
// - Balance-এর চেয়ে বেশি টাকা Withdraw করা যাবে না।

class BankAccount {
  readonly accountId: number;
  accountHolder: string;
  private balance: number;

  constructor(accountID: number, accountHolder: string, balance: number) {
    ((this.accountId = accountID),
      (this.accountHolder = accountHolder),
      (this.balance = balance));
  }

  getBalance(): number {
    return this.balance;
  }

  deposit(amount: number): void {
    if (this.balance <= 0 || amount < 0) {
      throw new Error("Invalid amount");
    }

    this.balance += amount;
  }

  withdraw(amount: number): void {
    if (this.balance <= amount) {
      throw new Error("Please currected amount enter");
    }

    this.balance -= amount;
  }
}

const bankHolder = new BankAccount(1015, "MD", 7800);

bankHolder.deposit(48000);

console.log(bankHolder.getBalance());
