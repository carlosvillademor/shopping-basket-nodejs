# Shopping basket in NodeJS

Write a simple program that calculates the price of a shopping basket. Items are presented one at a time, in a list, identified by name - for example "Apple" or "Banana". The basket can contain any item multiple times. Items are priced as follows:

- Apples are 25p each
- Oranges are 30p each
- Garlic are 15p each
- Papayas are 50p each, but are available as ‘three for the price of two’

Given a list of shopping, calculate the total cost of those items. The output should be displayed similar to what you would expect to see on a receipt.

## Requirements 

- Node.js >= 5.12.0
- npm >= 3.8.6

## Quick start

Install project by command

`npm install`

Run project by command

`npm start`


## Welcome screen

The below is the welcome screen when program is run
```
### Product List:
0. Apple    ->  £0.25
1. Orange   ->  £0.30
2. Garlic   ->  £0.15
3. Papaya   ->  £0.50
### Discount List:
Papaya x 3  ->  -£0.50

### Commands:
a [product_number] [product_quantity]   - add product (eg. a 0 10)
r [basket_number]                       - remove product (eg. r 0)
b                                       - display basket
s                                       - product list
p                                       - payments

>
```
