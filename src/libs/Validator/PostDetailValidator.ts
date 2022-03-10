import Validator from "./Validator";
import { isNotEmpty } from "./validations";

import { PostDetailInitializer } from "@/models/PostDetail";

const postDetailValidator = new Validator<PostDetailInitializer>({
  id: [isNotEmpty],
  title: [isNotEmpty],
  description: [],
  category: [],
  createdAt: [isNotEmpty],
  article: [isNotEmpty],
});

export default postDetailValidator;
