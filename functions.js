//create two functions that contain two variables
//those variables will contain numbers
//first var contains 20 and 40
//second var contains 50 and 60
//create two global variables, 100 and 200
//create a superGrandTotal variable that contains the total of all numbers


function num1(){
	var twenty = 20;
	var forty = 40;

	return twenty + forty;
}

function num2(){
	var fifty = 50;
	var sixty = 60;

	return fifty + sixty;
}

var oneHundred = 100;

var twoHundred = 200;

var superGrandTotal = num1() + num2() + oneHundred + twoHundred;

console.log(superGrandTotal);