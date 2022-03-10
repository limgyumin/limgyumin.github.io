import Validator from "./Validator";
import { isNotEmpty } from "./validations";

import { PostDetailInitializer } from "@/models/PostDetail";

const postDetailValidator = new Validator<PostDetailInitializer>({
  id: [isNotEmpty],
  title: [isNotEmpty],
  description: [isNotEmpty],
  category: [],
  createdAt: [isNotEmpty],
  article: [],
});

export default postDetailValidator;
