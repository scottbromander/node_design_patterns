const chalk = require("chalk");

class Logger {
  constructor() {
    this.logs = [];
  }

  get count() {
    return this.logs.length;
  }

  log(message) {
    const timestamp = new Date().toISOString();
    this.logs.push({ message, timestamp });
    console.log(`${chalk.blue(timestamp)} - ${chalk.green(message)}`);
  }
}

// class Singleton {
//   constructor() {
//     if (!Singleton.instance) {
//       Singleton.instance = new Logger();
//     }
//   }

//   getInstance() {
//     return Singleton.instance;
//   }
// }

/*
The code above IS a solution for a singleton in Node. The explicit callout of the Singleton class would
hypothetically let another developer know, 'hey, this is a singleton', but the more common convention is
below. 

While less obvious to someone untrained, the `new Logger()` is a singleton implementation in Node.
The idea here is that we run the file once, it creates a new instance of the logger, and then saves it
and caches it. Node JS will automagically handle exporting the same instance of the logger to every
other module that wants to consume it.
*/
module.exports = new Logger();
