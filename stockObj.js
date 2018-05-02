//Objective: Take inputs from a user to create a stock object.
	
	//Ticker, name, proce, change, market cap

//Use constructor objects to build the object using the above information. Then, add the created object to a main object

function stock(ticker, name, price, change, marketCap){
	
	this.ticker = ticker;
	this.name = name;
	this.price = price;
	this.change = change;
	this.marketCap = marketCap;

}

