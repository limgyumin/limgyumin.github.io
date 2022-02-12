import Post from "@/models/Post";

import BaseValidator from "./Validator";
import {
  isFixedDateFormat,
  isFixedFileName,
} from "@/libs/Validator/validations/post";
import { isNotEmpty } from "@/libs/Validator/validations/util";

const postValidator = new BaseValidator<Post>({
  id: [isFixedFileName],
  title: [isNotEmpty],
  description: [isNotEmpty],
  category: [],
  createdAt: [isFixedDateFormat],
});

export default postValidator;
