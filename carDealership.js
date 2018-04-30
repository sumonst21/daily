var carDealership = {

	sedan: {
		rentalPrice: 80,
		numAvailable: 18,

	},

	suv: {
		rentalPrice: 100,
		numAvailable: 0,

	},

	sports: {
		rentalPrice: 150,
		numAvailable: 6,

    },

	checkAvailability: function(carType){

		if(this[carType].numAvailable > 0)
			// this[carType].numAvailable--;
			return `Good news! We have ${this[carType].numAvailable} ${carType} cars left. It only costs $${this[carType].rentalPrice} to rent one!`;

		else{
			return `Unfortunately we are all out of ${carType}'s, please select another type of vehicle `;
		}
	}

}

carDealership.checkAvailability('suv');