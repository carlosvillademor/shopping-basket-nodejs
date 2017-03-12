'use strict';

class Discount {

    constructor(name, quantity, price) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }

    print() {
        console.log(this.name + '\t x ' + this.quantity + '\t->\t -£' + this.price.toFixed(2));
    }

}

module.exports = Discount;
