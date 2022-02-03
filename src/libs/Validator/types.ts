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

export type Validations<T, U = T[keyof T]> = {
  [key in keyof T]: Validation<U>[];
};
