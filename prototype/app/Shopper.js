class Shopper {
  constructor(name = "unnamed") {
    this._name = name;
    this._shoppingList = [];
  }

  set name(value) {
    this._name = value;
  }

  get name() {
    return this._name;
  }

  get shoppingList() {
    return this._shoppingList.join(", ");
  }

  // Note that `set shoppingList` is not included here. We do not want to create the ability to mutate
  // the array completely when working outside of this class. Instead, we create methods to work with
  // this property.
  addItemToList(item) {
    this._shoppingList.push(item);
  }

  // This method is created to implement the prototype pattern
  clone() {
    let proto = Object.getPrototypeOf(this);
    let cloned = Object.create(proto);

    cloned._name = this._name;
    cloned._shoppingList = [...this._shoppingList];

    return cloned;
  }
}

module.exports = Shopper;
