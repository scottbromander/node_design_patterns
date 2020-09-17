class Shopper {
  constructor(name, money = 0) {
    this._name = name;
    this._money = money;
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

  toString() {
    return `${this._name} - ${this._money}`;
  }
}

module.exports = Shopper;
