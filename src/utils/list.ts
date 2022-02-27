import Page from "@/utils/page";
import Sort, { OrderMethod } from "@/utils/sort";

class ListFilter<T extends object> {
  private total: number = 0;

  constructor(private list: T[] = []) {}

  where(key: keyof T, fn: (value: T[keyof T]) => boolean): this {
    const filtered = this.list.filter((obj) => fn(obj[key]));

    this.list = filtered;

    return this;
  }

  orderBy(key: keyof T, method: OrderMethod = "ASC"): this {
    const sorted = new Sort(this.list).orderBy(key, method);

    this.list = sorted;

    return this;
  }

  paginate(offset: number, limit: number): this {
    const { list, total } = new Page(this.list).skip(offset).take(limit);

    this.list = list;
    this.total = total;

    return this;
  }

  getOne(): T {
    const [item] = this.list;

    return item;
  }

  getMany(): { list: T[]; total: number } {
    const total = this.total || this.list.length;

    return { list: this.list, total };
  }
}

export default ListFilter;
