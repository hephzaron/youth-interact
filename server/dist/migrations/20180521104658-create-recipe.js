'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.createTable('Recipes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING
      },
      upVotes: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      downVotes: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      favorites: {
        type: Sequelize.INTEGER
      },
      likes: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      dislikes: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      imageUrl: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        defaultValue: Sequelize.NOW,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        defaultValue: Sequelize.NOW,
        type: Sequelize.DATE
      }
    });
  },
  down: function down(queryInterface) {
    return queryInterface.dropTable('Recipes');
  }

};