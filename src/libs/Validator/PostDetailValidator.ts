import Validator from "./Validator";
import { isDate, isNotEmpty } from "./validations";

import { PostDetailInitializer } from "@/models/PostDetail";

const postDetailValidator = new Validator<PostDetailInitializer>({
  id: [isNotEmpty],
  title: [isNotEmpty],
  description: [],
  category: [],
  createdAt: [isNotEmpty, isDate],
  article: [isNotEmpty],
});

export default postDetailValidator;
