class Product {
    constructor(name, price, pId) {
        this.name = name;
        this.price = price;
        this.pId = pId;
        this.inCart = false;
        this.isOrdered = false;
    }
    addToCart() {
        this.inCart = true;
    }
    buyProduct() {
        if (this.inCart) {
            console.log(`Buying ${this.name}`);
            this.isOrdered = true;
        }
        else {
            console.log("Product is not in cart");
        }
    }
}
let product = new Product("Laptop", 1000, 1);
console.log(product.name);
product.addToCart();
product.buyProduct();
export {};
//# sourceMappingURL=index.js.map