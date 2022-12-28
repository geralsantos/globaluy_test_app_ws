'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("order", [
			{
				company_id: 1,
				user_id: 1,
				date_created: new Date(),
				status: 1,
			},
      {
				company_id: 1,
				user_id: 1,
				date_created: new Date(),
				status: 2,
			},
      {
				company_id: 1,
				user_id: 1,
				date_created: new Date(),
				status: 3,
			},
		]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
