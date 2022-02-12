export enum State {
  Success = "success",
  Failure = "failure",
}

type Success = {
  state: State.Success;
};

type Failure = {
  state: State.Failure;
  reason: string;
};

type ValidationResult = Success | Failure;

export type Validation<T> = (value: T) => ValidationResult;

export type Validations<T> = {
  [K in keyof T]: Validation<T[K]>[];
};

class BaseValidator<T extends object> {
  constructor(private readonly validations: Validations<T>) {}

  validate(object: T): void {
    const keys = Object.keys(this.validations) as (keyof T)[];

    keys.forEach((key) => {
      this.validations[key].forEach((validation) => {
        const result = validation(object[key]);

        if (result.state === State.Failure) {
          throw new Error(result.reason);
        }
      });
    });
  }
}

export default BaseValidator;
