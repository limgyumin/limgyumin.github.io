class Validator {
  isFilled(value: string): this {
    const regExp = /\s/gm;
    const replaced = value.replace(regExp, "");

    if (replaced === "") {
      throw new Error("Value is empty.");
    }

    return this;
  }

  isDate(value: string): this {
    if (!value) {
      return this;
    }

    const regExp = /\d{4}-\d{1,2}-\d{1,2}/g;
    const matched = value.match(regExp);

    if (!matched) {
      throw new Error(`${value} is not a date.`);
    }

    return this;
  }

  isFileName(value: string): this {
    const regExp = /\d{4}-\d{1,2}-\d{1,2}-.+/g;

    if (!regExp.test(value)) {
      throw new Error(`${value} is not a file name.`);
    }

    return this;
  }

  isMetaData(value: string): this {
    const regExp = /(?:\w+:\s?.+\n)+/g;

    if (!regExp.test(value)) {
      throw new Error(`${value} is not a metadata.`);
    }

    return this;
  }
}

export default Validator;
