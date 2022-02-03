import Validator from "./Validator";

class MetaDataValidator implements Validator<string> {
  validate(value: string) {
    const regExp = /(?:\w+:\s?.+\n)+/g;

    if (!regExp.test(value)) {
      throw new Error(`${value} is not a metadata.`);
    }
  }
}

export default MetaDataValidator;
