const userFactory = require('./userFactory');

const scott = userFactory('Scott', 100);
const jackson = userFactory('Jackson', 100, 'employee', 'GameStop');

jackson.payday();

console.log(scott.toString());
console.log(jackson.toString());
