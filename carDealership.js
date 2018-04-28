var carDealership = {

	sedan: {
		rentalPrice: 80,
		numAvailable: 18,
		request: function(){
			if(this.numAvailable > 0)
			return `Good news! We have ${this.numAvailable} sedans left. It only costs $${this.rentalPrice} to rent one!`;

			else{
				return `Unfortunately we're all out of sedans!`;
			}
		}
	},

	suv: {
		rentalPrice: 100,
		numAvailable: 0,
		request: function(){
			if(this.numAvailable > 0)
			return `Good news! We have ${this.numAvailable} SUV's left. It only costs $${this.rentalPrice} to rent one!`;

			else{
				return `Unfortunately we're all out of SUV's`
			}
		}

	},

	sports: {
		rentalPrice: 150,
		numAvailable: 6,
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