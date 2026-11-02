type BankAccount = {
  readonly accountNumber: string;
  accountHolderName: string;
  balance: number;
  accountType: "savings" | "checking";
};

const bankAccounts1: BankAccount[] = [
  {
    accountNumber: "123456789",
    accountHolderName: "John Doe",
    balance: 1000,
    accountType: "savings",
  },
];
const bankAccounts2: BankAccount[] = [
  {
    accountNumber: "987654321",
    accountHolderName: "Jane Smith",
    balance: 2000,
    accountType: "checking",
  },
];

function deposit(accountNumber: string, amount: number) {
  return bankAccounts1.map((account) => {
    if (account.accountNumber === accountNumber) {
      account.balance += amount;
    }
    return account;
  });
}

function withdraw(accountNumber: string, amount: number) {
  return bankAccounts1.map((account) => {
    if (account.accountNumber === accountNumber) {
      account.balance -= amount;
    }
    return account;
  });
}

console.log(deposit("123456789", 500));
console.log(withdraw("123456789", 200));
