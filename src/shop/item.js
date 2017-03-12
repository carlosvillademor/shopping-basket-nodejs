'use strict';

class Item {

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    print(position) {
        console.log(position + '.\t' + this.name + '\t->\t £' + this.price.toFixed(2));
    }

}

module.exports = Item;
