abstract class Payment {
  protected amount: number;

  constructor(amount: number) {
    if (amount <= 0) {
      throw new Error("Invalid payment amount");
    }

    this.amount = amount;
  }

  abstract processPayment(): void;
}

class BkashPayment extends Payment {
  processPayment(): void {
    console.log(`Bkash Payment: ${this.amount}`);
  }
}

class NagadPayment extends Payment {
  processPayment(): void {
    console.log(`Nagad Payment: ${this.amount}`);
  }
}

const payment1 = new BkashPayment(500);
const payment2 = new NagadPayment(1000);

payment1.processPayment();
payment2.processPayment();
