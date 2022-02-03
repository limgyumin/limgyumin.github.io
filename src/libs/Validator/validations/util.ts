import { State, Validation } from "../types";

export const isRequired: Validation<string> = (
  value: string | null | undefined,
) => {
  if (value != null) {
    return { state: State.Success };
  }
  return { state: State.Failure, reason: "Value is not required." };
};

export const isNotEmpty: Validation<string> = (value: string) => {
  if (value.replace(/\s/gm, "") !== "") {
    return { state: State.Success };
  }
  return { state: State.Failure, reason: "Value is empty." };
};
