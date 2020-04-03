'use strict';
module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define('Authors', {
    name: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {
		paranoid: true,
		freezeTableName: true,
		tableName: 'Authors'
	});
  Author.associate = function(models) {
		Author.hasMany(models.Quotes)
  };
  return Author;
};