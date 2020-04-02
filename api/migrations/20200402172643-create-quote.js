'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Quotes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
			},
			authorId: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: {model:'Authors', key:'id'}
			},
      text: {
        type: Sequelize.STRING
      },
      category: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
			},
			deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
			},
			email: {
        type: Sequelize.STRING
			},
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Quotes');
  }
};