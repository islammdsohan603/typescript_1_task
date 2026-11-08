class ProductsManagement {
  readonly productId: number;
  public name: string;
  private price: number;
  private stock: number;

  constructor(productId: number, name: string, price: number, stock: number) {
    if (!Number.isInteger(productId) || productId <= 0) {
      throw new Error("Invalid product ID!");
    }

    if (!name.trim()) {
      throw new Error("Product name is required!");
    }

    if (!Number.isFinite(price) || price <= 0) {
      throw new Error("Price must be greater than zero!");
    }

    if (!Number.isInteger(stock) || stock < 0) {
      throw new Error("Stock must be a non-negative integer!");
    }

    this.productId = productId;
    this.name = name;
    this.price = price;
    this.stock = stock;
  }

  // Get Product Information
  getProductInfo(): string {
    return `
      Product ID: ${this.productId}
      Product Name: ${this.name}
      Product Price: ৳${this.price}
      Available Stock: ${this.stock}
    `;
  }

  // Get Price
  getPrice(): number {
    return this.price;
  }

  // Get Stock
  getStock(): number {
    return this.stock;
  }

  // Update Product Price
  updatePrice(newPrice: number): void {
    if (!Number.isFinite(newPrice) || newPrice <= 0) {
      throw new Error("New price must be greater than zero!");
    }

    this.price = newPrice;
  }

  // Purchase Product
  purchase(quantity: number): number {
    if (!Number.isInteger(quantity) || quantity <= 0) {
      throw new Error("Purchase quantity must be a positive integer!");
    }

    if (quantity > this.stock) {
      throw new Error("Insufficient stock!");
    }

    this.stock -= quantity;

    return this.stock;
  }
}

// Create Product
const product = new ProductsManagement(140, "PC", 140400, 5);

// Update Price
product.updatePrice(10050);

// Purchase Product
const remainingStock = product.purchase(2);

console.log(product.getProductInfo());
console.log("Remaining Stock:", remainingStock);
