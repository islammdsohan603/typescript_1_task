type BankAccount = {
  readonly accountNumber: string;
  accountHolderName: string;
  balance: number;
  accountType: "savings" | "current";
  accountHolderNameAge: number;
};

const bankAccount: BankAccount[] = [
  {
    accountNumber: "1234567890",
    accountHolderName: "John Doe",
    balance: 1000,
    accountType: "savings",
    accountHolderNameAge: 30,
  },
  {
    accountNumber: "0987654321",
    accountHolderName: "Jane Smith",
    balance: 2000,
    accountType: "current",
    accountHolderNameAge: 25,
  },
  {
    accountNumber: "5678901234",
    accountHolderName: "Alice Johnson",
    balance: 1500,
    accountType: "savings",
    accountHolderNameAge: 18,
  },
];

// deposit function

function deposit(accountNumber: string, amount: number) {
  if (amount <= 0) {
    throw new Error("Deposit amount must be greater than zero.");
  }

  const account = bankAccount.find(
    (acc) => acc.accountNumber === accountNumber,
  );
  if (!account) {
    throw new Error("Account not found.");
  }

  account.balance += amount;
}

// withdraw function

function withdraw(accountNumber: string, amount: number) {
  if (amount <= 0) {
    throw new Error("Withdrawal amount must be greater than zero.");
  }

  const account = bankAccount.find(
    (acc) => acc.accountNumber === accountNumber,
  );
  if (!account) {
    throw new Error("Account not found.");
  }

  if (account.balance < amount) {
    throw new Error("Insufficient balance.");
  }

  account.balance -= amount;
}

console.log("Before withdrawal:", bankAccount);
withdraw("1234567890", 500);
console.log("After withdrawal:", bankAccount);

deposit("0987654321", 1000);
console.log("After deposit:", bankAccount);
