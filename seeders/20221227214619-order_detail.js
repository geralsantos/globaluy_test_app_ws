"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.bulkInsert("order_detail", [
			{
				order_id: 1,
				product_id: 1,
				quantity: 10,
				status: 1,
			},
			{
				order_id: 1,
				product_id: 2,
				quantity: 12,
				status: 1,
			},
			{
				order_id: 1,
				product_id: 3,
				quantity: 13,
				status: 0,
			},
		]);
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
	},
};
