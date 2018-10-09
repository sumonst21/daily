var myStockList = [];

function myStocks(name, price, change, marketCap){

	this.name = name;
	this.price = price;
	this.change = change;
	this.marketCap = marketCap;

	myStockList.push(this)

}

var AMZN = new myStocks('AMZN', 1000, 15, 800);

var FB = new myStocks('FB', 200, 7, 300);



// Create a for loop that will iterate through the array and print the price of each stock
function displayPrice(){

	for(var i in myStockList)

		console.log(myStockList[i].name + ': $' + myStockList[i].price);

}

displayPrice()