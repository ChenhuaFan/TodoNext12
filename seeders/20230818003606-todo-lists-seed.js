'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('TodoLists', [
      {
        id: '1',
        name: 'Work',
        userId: '1', // Assuming you have a user with id 1
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '2',
        name: 'Personal',
        userId: '2', // Assuming you have a user with id 2
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Add more seed data...
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('TodoLists', null, {});
  }
};
