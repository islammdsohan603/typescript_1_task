
type BankAccount = {
  readonly accountNumber: string;
  accountHolderName: string;
  balance: number;
  accountType: "savings" | "current";
};

// All Bank Accounts
const bankAccounts: BankAccount[] = [
  {
    accountNumber: "123456789",
    accountHolderName: "John Doe",
    balance: 1000,
    accountType: "savings",
  },
  {
    accountNumber: "987654321",
    accountHolderName: "Jane Smith",
    balance: 2000,
    accountType: "current",
  },
];

// Deposit Function
function deposit(
  accountNumber: string,
  amount: number
): number {
  if (amount <= 0) {
    throw new Error("Deposit amount must be greater than zero");
  }

  const account = bankAccounts.find(
    (account) => account.accountNumber === accountNumber
  );

  if (!account) {
    throw new Error("Account not found");
  }

  account.balance += amount;

  return account.balance;
}

// Withdraw Function
function withdraw(
  accountNumber: string,
  amount: number
): number {
  if (amount <= 0) {
    throw new Error("Withdraw amount must be greater than zero");
  }

  const account = bankAccounts.find(
    (account) => account.accountNumber === accountNumber
  );

  if (!account) {
    throw new Error("Account not found");
  }

  if (account.balance < amount) {
    throw new Error("Insufficient balance");
  }

  account.balance -= amount;

  return account.balance;
}

// Function Calls
console.log("After Deposit:", deposit("123456789", 500));

console.log("After Withdraw:", withdraw("123456789", 200));

console.log("Jane's Balance:", bankAccounts[1].balance);
