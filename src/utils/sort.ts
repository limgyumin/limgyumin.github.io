export type OrderMethod = "ASC" | "DESC";

class Sort<T> {
  constructor(private readonly list: T[]) {}

  orderBy(key: keyof T, method: OrderMethod): T[] {
    const sorted = [...this.list].sort((x, y) => {
      if (method === "ASC") {
        if (x[key] > y[key]) return 1;
        if (x[key] < y[key]) return -1;
      }

      if (method === "DESC") {
        if (x[key] > y[key]) return -1;
        if (x[key] < y[key]) return 1;
      }

      return 0;
    });

    return sorted;
  }
}

export default Sort;
