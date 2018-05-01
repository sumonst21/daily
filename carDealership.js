var carDealership = {

	sedan: {
		rentalPrice: 80,
		numAvailable: 18,
<<<<<<< HEAD

=======
		request: function(){
			if(this.numAvailable > 0)
			return `Good news! We have ${this.numAvailable} sedans left. It only costs $${this.rentalPrice} to rent one!`;

			else{
				return `Unfortunately we're all out of sedans!`;
			}
		}
>>>>>>> fdf780b1dbd38217a20060ea98d9f6052acf3236
	},

	suv: {
		rentalPrice: 100,
		numAvailable: 0,
<<<<<<< HEAD
=======
		request: function(){
			if(this.numAvailable > 0)
			return `Good news! We have ${this.numAvailable} SUV's left. It only costs $${this.rentalPrice} to rent one!`;

			else{
				return `Unfortunately we're all out of SUV's`
			}
		}
>>>>>>> fdf780b1dbd38217a20060ea98d9f6052acf3236

	},

	sports: {
		rentalPrice: 150,
		numAvailable: 6,
<<<<<<< HEAD

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
=======
		request: function(){
			if(this.numAvailable > 0)
			return `Good news! We have ${this.numAvailable} sports cars left. It only costs $${this.rentalPrice} to rent one!`;

			else{
				return `Unfortunately we're all out of sports cars`
			}
		},

    },

}

carDealership.sedan.request()
>>>>>>> fdf780b1dbd38217a20060ea98d9f6052acf3236
