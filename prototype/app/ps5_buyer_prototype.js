const Shopper = require("./Shopper");

const ps5_buyer = new Shopper();
ps5_buyer.addItemToList(`PS5`);
ps5_buyer.addItemToList(`Marvel's Spider-Man: Miles Morales`);
ps5_buyer.addItemToList(`Horizon: Forbidden West`);
ps5_buyer.addItemToList(`Gran Turismo 7`);

module.exports = ps5_buyer;
