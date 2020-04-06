
module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.addColumn('Authors', 'email', Sequelize.STRING);
  },

  down(queryInterface) {
    return queryInterface.removeColumn('Authors', 'email');
  },
};
