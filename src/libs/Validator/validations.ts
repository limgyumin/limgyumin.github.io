import { State, Validation } from "./Validator";

export const isNotEmpty: Validation<string> = (value) => {
  if (value.replace(/\s/gm, "") !== "") {
    return { state: State.Success };
  }

  return { state: State.Failure, reason: "Value is empty." };
};

export const isDate: Validation<string> = (value) => {
  const regex = /\d{4}-\d{1,2}-\d{1,2}/g;

  if (value.match(regex)) {
    return { state: State.Success };
  }

  return { state: State.Failure, reason: "Value is not a date." };
};
