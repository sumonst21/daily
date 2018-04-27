//Factorialize function
function factorialize(num) {

	//If num is less than 0, reject it 
	if(num < 0)
		return -1;

	//If num is 0, then factorial is 1
	else if(num === 0)
		return 1;

	//Otherwise run the function
	else{
		return (num * factorialize(num - 1));
	}
}