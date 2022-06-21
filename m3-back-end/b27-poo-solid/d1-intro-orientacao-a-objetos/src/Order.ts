import Client from './Client';
import OrderItem from './OrderItem';

export default class Order {
  private _client: Client;

  private _items: OrderItem[] = [];

  private _paymentMethod: string;

  private _discount: number = 0;

  constructor(client: Client, items: OrderItem[], paymentMethod: string, discount: number) {
    this._client = client;
    this._items = items;
    this._paymentMethod = paymentMethod;
    this._discount = discount;
  }

  get client() {
    return this._client;
  }

  set client(value: Client) {
    this._client = value;
  }

  get items() {
    return this._items;
  }

  set items(value: OrderItem[]) {
    if (value.length === 0) throw new Error('O pedido deve ter pelo menos 1 item');

    this._items = value;
  }

  get paymentMethod() {
    return this._paymentMethod;
  }

  set paymentMethod(value: string) {
    this._paymentMethod = value;
  }

  get discount() {
    return this._discount;
  }

  set discount(value: number) {
    if (value < 0) throw new Error('O disconto não pode ser um valor negativo');

    this._discount = value;
  }
}
