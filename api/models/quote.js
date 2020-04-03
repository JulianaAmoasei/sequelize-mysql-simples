'use strict';
module.exports = (sequelize, DataTypes) => {
  const Quote = sequelize.define('Quotes', {
		authorId: DataTypes.INTEGER,
    text: DataTypes.STRING,
    category: DataTypes.STRING
  }, {
		paranoid: true,
		freezeTableName: true,
		tableName: 'Quotes'
	});
  Quote.associate = function(models) {
		Quote.belongsTo(models.Authors)
  };
  return Quote;
};