"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.bulkInsert("company_product", [
			{
				company_id: 1,
				product_id: 1,
				quantity: 10,
			},
			{
				company_id: 1,
				product_id: 2,
				quantity: 10,
			},
			{
				company_id: 1,
				product_id: 3,
				quantity: 10,
			},
			{
				company_id: 1,
				product_id: 4,
				quantity: 10,
			},
			{
				company_id: 1,
				product_id: 5,
				quantity: 10,
			},
			{
				company_id: 1,
				product_id: 6,
				quantity: 10,
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
