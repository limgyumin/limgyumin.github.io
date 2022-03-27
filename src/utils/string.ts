class StringUtil {
  constructor(private value: string) {}

  space2Hyphen(): this {
    this.value = this.value.replace(/\s/g, "-");

    return this;
  }

  removeSpecialSymbols(): this {
    this.value = this.value.replace(/[^ㄱ-힣a-zA-Z0-9-\s]+/g, "");

    return this;
  }

  get(): string {
    return this.value;
  }
}

export default StringUtil;
