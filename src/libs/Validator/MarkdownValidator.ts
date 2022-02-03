import Validator from "./Validator";

class MarkdownValidator implements Validator<string> {
  validate(value: string) {
    const regExp = /\d{4}-\d{1,2}-\d{1,2}-.+/g;

    if (!regExp.test(value)) {
      throw new Error(`${value} is not a file name.`);
    }
  }
}

export default MarkdownValidator;
