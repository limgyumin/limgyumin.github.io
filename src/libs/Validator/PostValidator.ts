import { PostInitializer } from "@/models/Post";
import { isNotEmpty } from "./validations";

import Validator from "./Validator";

const postValidator = new Validator<PostInitializer>({
  id: [isNotEmpty],
  title: [isNotEmpty],
  description: [],
  category: [],
  createdAt: [isNotEmpty],
});

export default postValidator;
