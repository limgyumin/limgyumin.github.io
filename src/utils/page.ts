class Page<T> {
  private paginated: T[] = [];

  constructor(private readonly list: T[]) {}

  skip(offset: number): this {
    const sliced = this.list.slice(offset);

    this.paginated = sliced;

    return this;
  }

  take(limit: number): T[] {
    return this.paginated.slice(0, limit);
  }
}

export default Page;
