const logger = require("./Logger");
const Shopper = require("./Shopper");
const Store = require("./Store");

// Dont actually need this line any more because the singleton was addressed in the export
// back in the Logger file.
// const logger = new Logger().getInstance();

logger.log("Starting config");
const scott = new Shopper("scott", 200);
const game_shop = new Store("Better than GameStop", [
  {
    item: "PS5",
    qty: 12,
    price: 500,
  },
  {
    item: "Switch",
    qty: 4,
    price: 300,
  },
]);

logger.log("Finished config");
console.log(`${logger.count} logs total`); //intentionally using stock logger here.
