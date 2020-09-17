const logger = require("./Logger");

// Dont actually need this line any more because the singleton was addressed in the export
// back in the Logger file.
// const logger = new Logger().getInstance();

class Shopper {
  constructor(name, money = 0) {
    this.name = name;
    this.money = money;
    logger.log(`New Shopper: ${name} has ${money} in their account`);
  }
}

module.exports = Shopper;
