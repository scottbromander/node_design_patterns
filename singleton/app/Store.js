const logger = require("./Logger");

// Dont actually need this line any more because the singleton was addressed in the export
// back in the Logger file.
// const logger = new Logger().getInstance();

class Store {
  constructor(name, inventory = []) {
    this.name = name;
    this.inventory = inventory;
    logger.log(`New Store: ${name} has ${inventory.length} items in stock.`);
  }
}

module.exports = Store;
