'use strict';

class Basket {

    constructor() {
        this.products = [];
    }

    add(item, quantity) {
        if (item) {
            var index = this.products.findIndex(
                (p) => p.item.name === item.name
            );
            if (index === -1) {
                this.products.push({
                    item: item,
                    quantity: Number(quantity)
                });
            } else {
                this.products[index].quantity += Number(quantity);
            }
        }
    }

    remove(index) {
        if (index < this.products.length) {
            this.products.splice(index, 1);
        }
    }

    addDiscounts(discounts) {
        this.discounts = discounts;
    }

    print() {
        var index = 0;
        this.products.forEach(
            (p) => console.log(
                index++ + '. ' + p.item.name + ' x ' + p.quantity + '\t = £' + (p.quantity * p.item.price).toFixed(2)
            )
        );
        console.log('');
        var sum = this.getSumPrice();
        var discount = this.getDiscountPrice();
        var total = sum - discount;
        console.log('Sum: £' + sum);
        console.log('Discount: £' + discount);
        console.log('Total: £' + total.toFixed(2));
    }

    getSumPrice() {
        var total = 0;
        this.products.forEach(
            (p) => total += (p.quantity * p.item.price)
        );
        return total.toFixed(2);
    }

    getDiscountPrice() {
        var total = 0;
        this.discounts.forEach(function(discount) {
            var index = this.products.findIndex(
                p => p.item.name === discount.name
            );
            var product = this.products[index];
            if (product) {
                total += (Math.floor(product.quantity / discount.quantity) * discount.price);
            }
        }, this);
        return total.toFixed(2);
    }

}

module.exports = Basket;
