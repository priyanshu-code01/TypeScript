class Product {
  name: string;
  price: number;
  pId: number;
  inCart: boolean;
  isOrdered: boolean;

  constructor(name: string, price: number, pId: number) {
    this.name = name;
    this.price = price;
    this.pId = pId;
    this.inCart = false;
    this.isOrdered = false;
  }

  addToCart(): void {
    this.inCart = true;
  }

  buyProduct(): void {
    if (this.inCart) {
      console.log(`Buying ${this.name}`);
      this.isOrdered = true;
    } else {
      console.log("Product is not in cart");
    }
  }
}

let product = new Product("Laptop", 1000, 1);

console.log(product.name);

product.addToCart();

product.buyProduct();
