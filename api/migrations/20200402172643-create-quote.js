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
				allowNull: false,
        type: Sequelize.STRING
      },
      category: {
				allowNull: false,
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
			}    
		});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Quotes');
  }
};