"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert("rol", [
			{
				name: "Empleado",
			},
			{
				name: "Supervisor",
			},
		]);
	},

	down: async (queryInterface, Sequelize) => {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
	},
};
