class Shopper {
  constructor(name, money, employer) {
    this._name = name;
    this._money = money;
    this._employer = employer;
  }

  payday() {
    this._money += 100;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get money() {
    return this._money;
  }

  set money(value) {
    this._money = value;
  }

  get employer() {
    return this._employer;
  }

  set employer(value) {
    this._employer = this.employer;
  }

  toString() {
    return `${this._name} - ${this._money} - ${this._employer}`;
  }
}

module.exports = Shopper;
