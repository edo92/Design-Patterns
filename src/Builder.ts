class Product {
    parts: string[] = [];
}

interface IBuilder {
    buildPartA(): this;
    buildPartB(): this;
    buildPartC(): this;
    getResult(): Product;
}

class Builder implements IBuilder {
    product: Product

    constructor() {
        this.product = new Product();
    }

    buildPartA() {
        this.product.parts.push('a');
        return this;
    }

    buildPartB() {
        this.product.parts.push('b');
        return this;
    }

    buildPartC() {
        this.product.parts.push('c');
        return this;
    }

    getResult() {
        return this.product;
    }
}

class Director {
    static construct() {
        return new Builder().buildPartA().buildPartB().buildPartC().getResult();
    }
}

// Usage
export const show = () => {
    const product1 = Director.construct();
    console.log('product', product1.parts);
}

show();