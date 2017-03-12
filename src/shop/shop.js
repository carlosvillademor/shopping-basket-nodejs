'use strict';

class Shop {

    constructor() {
        this.products = [];
        this.discounts = [];
    }

    addProduct(item) {
        if (item) {
            this.products.push(item);
        }
    }

    getProduct(index) {
        return this.products[index];
    }

    addDiscount(discount) {
        if (discount) {
            this.discounts.push(discount);
        }
    }

    getDiscounts() {
        return this.discounts;
    }

    print() {
        console.log('### Product List:');
        var index = 0;
        this.products.forEach(
            (p) => p.print(index++)
        );
        console.log('### Discount List:');
        this.discounts.forEach(
            (d) => d.print()
        );
    }

}

module.exports = Shop;
