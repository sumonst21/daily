//Check whether a number is odd or even
function oddEven(num){
	if(!Number.isInteger(num)){
		return 'Enter a number';
	}
	return num % 2 === 0 ? 'even' : 'odd';
}


