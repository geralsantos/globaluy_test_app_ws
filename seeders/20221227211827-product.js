"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.bulkInsert("product", [
			{
				description: "Detergente",
				unit: "1L",
				stock: 100,
				url: "https://melyplan.com.uy/wp-content/uploads/2021/07/botella-deter-neutro-web.png",
			},
			{
				description: "Desinfectante",
				unit: "1L",
				stock: 100,
				url: "https://ayudin.clorox.com/wp-content/uploads/2021/12/201215_AYU_MARVEL_AR_LAV_900-1.png",
			},
			{
				description: "Limpiador",
				unit: "1 Uni",
				stock: 100,
				url: "https://dr-beckmannlatam.com/wp-content/uploads/2019/07/LAT_Stainless-Steel-Gloss-Cleaner_Trigger_250ml-1.png",
			},
			{
				description: "Trapo de algodón",
				unit: "1 Uni",
				stock: 100,
				url: "https://www.flomez.com/wp-content/uploads/2021/06/927543-pano3-9bf31-1.webp",
			},
			{
				description: "Paño de limpieza",
				unit: "1 Uni",
				stock: 100,
				url: "https://melyplan.com.uy/wp-content/uploads/2021/07/botella-deter-neutro-web.png",
			},
			{
				description: "Cubre pisos",
				unit: "1 Uni",
				stock: 100,
				url: "https://melyplan.com.uy/wp-content/uploads/2021/07/botella-deter-neutro-web.png",
			},
			{
				description: "Paño rejilla",
				unit: "1 Uni",
				stock: 100,
				url: "https://melyplan.com.uy/wp-content/uploads/2021/07/botella-deter-neutro-web.png",
			},
			{
				description: "Toalla de cocina",
				unit: "1 Uni",
				stock: 100,
				url: "https://melyplan.com.uy/wp-content/uploads/2021/07/botella-deter-neutro-web.png",
			},
			{
				description: "Trapo color",
				unit: "1 Uni",
				stock: 100,
				url: "https://melyplan.com.uy/wp-content/uploads/2021/07/botella-deter-neutro-web.png",
			},
			{
				description: "Trapo blanco",
				unit: "1 Uni",
				stock: 100,
				url: "https://melyplan.com.uy/wp-content/uploads/2021/07/botella-deter-neutro-web.png",
			},
			{
				description: "Paño multiuso",
				unit: "1 Uni",
				stock: 100,
				url: "https://melyplan.com.uy/wp-content/uploads/2021/07/botella-deter-neutro-web.png",
			},
			{
				description: "Papel kraft",
				unit: "1 Uni",
				stock: 100,
				url: "https://melyplan.com.uy/wp-content/uploads/2021/07/botella-deter-neutro-web.png",
			},
			{
				description: "Cartón corrugado",
				unit: "1 Uni x 100mts",
				stock: 100,
				url: "https://melyplan.com.uy/wp-content/uploads/2021/07/botella-deter-neutro-web.png",
			},
			{
				description: "Papel periódico",
				unit: "1 Uni x 50cm",
				stock: 100,
				url: "https://melyplan.com.uy/wp-content/uploads/2021/07/botella-deter-neutro-web.png",
			},
			{
				description: "Cubre pisos",
				unit: "1 Uni x 3mts",
				stock: 100,
				url: "https://melyplan.com.uy/wp-content/uploads/2021/07/botella-deter-neutro-web.png",
			},
			{
				description: "Papel cuellero",
				unit: "1 Uni x 430hojas",
				stock: 100,
				url: "https://melyplan.com.uy/wp-content/uploads/2021/07/botella-deter-neutro-web.png",
			},
			{
				description: "Jabón líquido",
				unit: "1 Uni x 250ml",
				stock: 100,
				url: "https://melyplan.com.uy/wp-content/uploads/2021/07/botella-deter-neutro-web.png",
			},
			{
				description: "Lavavajillas",
				unit: "1 Uni x 500ml",
				stock: 100,
				url: "https://melyplan.com.uy/wp-content/uploads/2021/07/botella-deter-neutro-web.png",
			},
			{
				description: "Abrillantador",
				unit: "1 Uni x 500ml",
				stock: 100,
				url: "https://melyplan.com.uy/wp-content/uploads/2021/07/botella-deter-neutro-web.png",
			},
			{
				description: "Limpiamaquinas",
				unit: "1 Uni x 260ml",
				stock: 100,
				url: "https://melyplan.com.uy/wp-content/uploads/2021/07/botella-deter-neutro-web.png",
			},
			{
				description: "Sal especial",
				unit: "1 Uni x 500ml",
				stock: 100,
				url: "https://melyplan.com.uy/wp-content/uploads/2021/07/botella-deter-neutro-web.png",
			},
			{
				description: "Gel iniciador",
				unit: "1L",
				stock: 100,
				url: "https://melyplan.com.uy/wp-content/uploads/2021/07/botella-deter-neutro-web.png",
			},
			{
				description: "Fungicida",
				unit: "1L",
				stock: 100,
				url: "https://melyplan.com.uy/wp-content/uploads/2021/07/botella-deter-neutro-web.png",
			},
			{
				description: "Anti mosquitos",
				unit: "1L",
				stock: 100,
				url: "https://melyplan.com.uy/wp-content/uploads/2021/07/botella-deter-neutro-web.png",
			},
			{
				description: "Hipoclorito",
				unit: "10L",
				stock: 100,
				url: "https://melyplan.com.uy/wp-content/uploads/2021/07/botella-deter-neutro-web.png",
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
