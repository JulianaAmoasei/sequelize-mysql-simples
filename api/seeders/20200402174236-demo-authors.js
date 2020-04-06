
module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Authors', [
    {
      name: 'Juliana Amoasei',
      active: true,
      createdAt: new Date(),
      updatedAt: new Date(),
      email: 'ju@ju.com',
    },
    {
      name: 'Ricardo Fukui',
      active: true,
      createdAt: new Date(),
      updatedAt: new Date(),
      email: 'ri@ri.com',
    },
    {
      name: 'Fernando Cardoso',
      active: true,
      createdAt: new Date(),
      updatedAt: new Date(),
      email: 'fe@fe.com',
    },
  ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('Authors', null, {}),
};
