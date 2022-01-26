class Validator {
  isFilled(value: string): this {
    const regExp = /\s/gm;
    const replaced = value.replace(regExp, "");

    if (replaced === "") {
      throw new Error("String value is empty!");
    }

    return this;
  }

  isDate(date: string): this {
    if (!date) {
      return this;
    }

    const regExp = /\d{4}-\d{1,2}-\d{1,2}/gi;
    const matched = date.match(regExp);

    if (!matched) {
      throw new Error("String date does not match the format!");
    }

    return this;
  }
}

export default Validator;
