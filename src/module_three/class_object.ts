class Account {
  id: number;
  private balance: number;
  owner: string;

  constructor(id: number, balance: number, owner: string) {
    ((this.id = id), (this.balance = balance), (this.owner = owner));
  }

  deposite(amount: number) {
    if (amount <= 0) throw new Error("Invalid amount");
    this.balance += amount;
  }
}

const account = new Account(4, 1800, "sohan");
account.deposite(4800);

console.log(account);
