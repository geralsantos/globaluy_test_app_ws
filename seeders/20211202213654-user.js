'use strict';
const bcrypt = require("bcrypt");
const config = require("../config/config");

module.exports = {
   async up (queryInterface, Sequelize)  {
    return queryInterface.bulkInsert("user", [
			{
				rol_id: 1,
        full_name:'Empleado',
        user_code:'EMP-001',
        email:'empleado@gmail.com',
        password: await bcrypt.hashSync("123", config.bcrypt_salt_rounds),
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
  }
};
