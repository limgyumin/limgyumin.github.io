type FactoryAttributes<T> = {
  [K in keyof T]: () => T[K];
};

class Factory<T extends object> {
  constructor(private readonly attributes: FactoryAttributes<T>) {}

  build(): T {
    const keys = Object.keys(this.attributes) as (keyof T)[];

    const object = keys.reduce((acc, key) => {
      const attribute = this.attributes[key];

      acc[key] = attribute();

      return acc;
    }, {} as T);

    return object;
  }

  buildList(count: number): T[] {
    const list: T[] = [];

    for (let i = 0; i < count; i += 1) {
      list.push(this.build());
    }

    return list;
  }
}

export default Factory;
