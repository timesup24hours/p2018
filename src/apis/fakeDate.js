import faker from 'faker';
import uuid from 'uuid';

export default [...new Array(41)]
  .map(() => {
    return {
      id: uuid(),
      title: faker.lorem.slug(),
      subTitle: faker.lorem.words(),
      content: faker.lorem.paragraphs(15),
      createdAt: new Date(faker.date.past()).toISOString()
    };
  })
  .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
