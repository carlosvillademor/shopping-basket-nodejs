'use strict';

var readline = require('readline');

var Shop = require('./shop/shop');
var Basket = require('./shop/basket');
var Item = require('./shop/item');
var Discount = require('./shop/discount');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var shop = new Shop();
// Products definition
shop.addProduct(new Item('Apple', 0.25));
shop.addProduct(new Item('Orange', 0.30));
shop.addProduct(new Item('Garlic', 0.15));
shop.addProduct(new Item('Papaya', 0.50));
// Discounts definition
shop.addDiscount(new Discount('Papaya', 3, 0.50));

// Print product in shop
shop.print();

console.log('');

// Create new basket
var basket = new Basket();
basket.addDiscounts(shop.getDiscounts());

console.log('### Commands:');
console.log('a [product_number] [product_quantity]\t- add product (eg. a 0 10)');
console.log('r [basket_number] \t\t\t- remove product (eg. r 0)');
console.log('b \t\t\t\t\t- display basket');
console.log('s \t\t\t\t\t- product list');
console.log('p \t\t\t\t\t- payments');
console.log('');

rl.prompt();
rl.on('line', (line) => {
    var command = line.trim();
    var args = command.split(' ');
    if (args.length) {
        switch (args[0]) {
            case 'a':
                var product = shop.getProduct(args[1]);
                if (product) {
                    console.log('');
                    basket.add(product, args[2]);
                    console.log('---> Product added: ' + product.name + ' x ' + args[2]);
                    console.log('');
                }
                break;
            case 'b':
                console.log('');
                console.log('### Basket List:');
                basket.print();
                console.log('');
                break;
            case 'r':
                console.log('');
                basket.remove(args[1]);
                console.log('---> Product removed');
                console.log('');
                break;
            case 's':
                console.log('');
                shop.print();
                console.log('');
                break;
            case 'p':
                rl.close();
                break;
        }
    }
    rl.prompt();
}).on('close', () => {
    console.log('');
    console.log('### Bill:');
    basket.print();
    console.log('');
    process.exit(0);
});
