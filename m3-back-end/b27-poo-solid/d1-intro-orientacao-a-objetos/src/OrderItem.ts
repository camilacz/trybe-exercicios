export default class OrderItem {
  private _item: string;

  private _price: number;

  constructor(item: string, price: number) {
    this._item = item;
    this._price = price;
  }

  get item() {
    return this._item;
  }

  set item(value: string) {
    if (value.length < 3) throw new Error('O nome deve conter no mínimo 3 caracteres');
    this._item = value;
  }

  get price() {
    return this._price;
  }

  set price(value: number) {
    if (value < 0) throw new Error('O preço deve ser um valor positivo');
    this._price = value;
  }
}
