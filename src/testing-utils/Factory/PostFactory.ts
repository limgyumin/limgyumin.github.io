import faker from "faker";

import Factory from "./Factory";

import { PostInitializer } from "@/models/Post";

const postFactory = new Factory<PostInitializer>({
  id: () => faker.random.alphaNumeric(7),
  title: () => faker.name.title(),
  description: () => faker.lorem.sentence(),
  category: () => faker.lorem.word(),
  createdAt: () => faker.date.past().toISOString(),
});

export default postFactory;
