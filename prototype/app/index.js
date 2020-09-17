const ps5_buyer_prototype = require("./ps5_buyer_prototype");
const ps5_buyer = require("./ps5_buyer_prototype");

const scott = ps5_buyer.clone();
scott.name = "Scott Bromander";
scott.addItemToList("Godfall");

const jackson = ps5_buyer.clone();
jackson.name = "Jackson Bromander";
jackson.addItemToList("Ratchet & Clank: Rift Apart");

console.log(`${scott.name}: ${scott.shoppingList}`);
console.log(`${jackson.name}: ${jackson.shoppingList}`);
