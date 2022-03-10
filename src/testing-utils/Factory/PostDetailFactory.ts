import faker from "faker";

import Factory from "./Factory";

import { PostDetailInitializer } from "@/models/PostDetail";

const postDetailFactory = new Factory<PostDetailInitializer>({
  id: () => faker.random.alphaNumeric(7),
  title: () => faker.name.title(),
  description: () => faker.lorem.sentence(),
  category: () => faker.lorem.word(),
  createdAt: () => faker.date.past().toISOString(),
  article: () => faker.lorem.paragraph(),
});

export default postDetailFactory;
