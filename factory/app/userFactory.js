const Employee = require('./Employee');
const Shopper = require('./Shopper');

const userFactory = (name, money = 0, type, employer) => {
  switch (type) {
    case 'employee':
      return new Employee(name, money, employer);
      break;
    default:
      return new Shopper(name, money);
      break;
  }
};

module.exports = userFactory;
