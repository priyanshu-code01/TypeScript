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

  protected addToCart(): void {
    this.inCart = true;
  }

  private buyProduct(): void {
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

// product.addToCart(); // protected

// product.buyProduct(); // private


class Order extends Product {
    constructor() {
        super("Phone", 500, 2);
    }

    getPrice() {
        return this.price; // protected
    }
}

let order = new Order();

console.log(order.getPrice());