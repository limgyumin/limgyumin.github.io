class Page<T> {
  private paginated: T[] = [];

  constructor(private readonly list: T[]) {
    this.paginated = [...list];
  }

  skip(offset: number): this {
    const sliced = this.paginated.slice(offset);

    this.paginated = sliced;

    return this;
  }

  take(limit: number): { list: T[]; total: number } {
    const taken = this.paginated.slice(0, limit);

    return { list: taken, total: this.list.length };
  }
}

export default Page;
