import { PostInitializer } from "@/models/Post";
import { isDate, isNotEmpty } from "./validations";

import Validator from "./Validator";

const postValidator = new Validator<PostInitializer>({
  id: [isNotEmpty],
  title: [isNotEmpty],
  description: [],
  category: [],
  createdAt: [isNotEmpty, isDate],
});

export default postValidator;
