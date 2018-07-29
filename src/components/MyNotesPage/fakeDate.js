import faker from 'faker';

export default [...new Array(91)]
  .map(() => {
    return {
      title: faker.lorem.slug(),
      content: faker.lorem.words(),
      createdAt: new Date(faker.date.past()).toISOString()
    };
  })
  .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
