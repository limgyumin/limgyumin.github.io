import { State, Validation } from "../Validator";

export const isMetaData: Validation<string> = (value: string) => {
  if (/(?:\w+:\s?.+\n)+/g.test(value)) {
    return { state: State.Success };
  }
  return { state: State.Failure, reason: `${value} is not a metadata.` };
};

export const isFixedDateFormat: Validation<string> = (value: string) => {
  if (/\d{4}-\d{1,2}-\d{1,2}/g.test(value)) {
    return { state: State.Success };
  }
  return {
    state: State.Failure,
    reason: `${value} is not a fixed date format.`,
  };
};

export const isFixedFileName: Validation<string> = (value: string) => {
  if (/\d{4}-\d{1,2}-\d{1,2}-.+/g.test(value)) {
    return { state: State.Success };
  }
  return { state: State.Failure, reason: `${value} is not a fixed file name.` };
};
