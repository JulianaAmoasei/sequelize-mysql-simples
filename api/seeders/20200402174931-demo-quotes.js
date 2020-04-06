
module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Quotes', [
    {
      authorId: 1,
      text: 'primeiro post Ju id 1',
      category: 'comédia',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      authorId: 2,
      text: 'primeiro post Ricardo id 2',
      category: 'drama',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      authorId: 3,
      text: 'primeiro post Fernando id 3',
      category: 'piada',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      authorId: 1,
      text: 'segundo post Ju id 1',
      category: 'drama',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('Quotes', null, {}),
};
