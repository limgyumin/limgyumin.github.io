import { State, Validations } from "./types";

class Validator<T extends object, K extends keyof T> {
  constructor(private readonly object: T) {}

  validate(validations: Validations<T>) {
    const keys = Object.keys(validations) as K[];

    keys.forEach((key) => {
      validations[key].forEach((validation) => {
        const result = validation(this.object[key]);

        if (result.state === State.Failure) {
          throw new Error(result.reason);
        }
      });
    });
  }
}

export default Validator;
