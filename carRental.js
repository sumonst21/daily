var carRental = {

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
			return `Good news! We have ${this[carType].numAvailable} ${carType}'s left. Would you like to rent one for $${this[carType].rentalPrice} per day?`;

		else{
			return `Unfortunately we are all out of ${carType}'s, please select another type of vehicle `;
		}
	}

}

carRental.checkAvailability('sedan')