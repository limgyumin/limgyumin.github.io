import Page from "@/utils/page";
import Sort, { OrderMethod } from "@/utils/sort";

class List<T extends object> {
  private total: number = 0;
  private _list: T[] = [];

  constructor(list: T[]) {
    this._list = [...list];
  }

  where(key: keyof T, fn: (value: T[keyof T]) => boolean): this {
    const filtered = this._list.filter((obj) => fn(obj[key]));

    this._list = filtered;

    return this;
  }

  orderBy(key: keyof T, method: OrderMethod = "ASC"): this {
    const sorted = new Sort(this._list).orderBy(key, method);

    this._list = sorted;

    return this;
  }

  paginate(offset: number, limit: number): this {
    const { list, total } = new Page(this._list).skip(offset).take(limit);

    this._list = list;
    this.total = total;

    return this;
  }

  getOne(): T {
    const [item] = this._list;

    return item;
  }

  getMany(): { list: T[]; total: number } {
    const total = this.total || this._list.length;

    return { list: this._list, total };
  }
}

export default List;
