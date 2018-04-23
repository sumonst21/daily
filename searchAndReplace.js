function myReplace(str, before, after) {

	//split the string into an array
	str = str.split(' ');

	//find where the original word is in the array
	var startSplice = str.indexOf(before);

	//check the case of the word to be replacedc
	var checkCase = before[0];

	//if uppercase, change first char of 'after' to uppercase
	if(checkCase == checkCase.toUpperCase()){

		after[0] = after.charAt(0).toUpperCase;
		str.splice(startSplice, 1, after.charAt(0).toUpperCase() + after.slice(1));
	}

	//otherwise run as normal if lowercase
	else{
		str.splice(startSplice, 1, after);
	}
	
	//return the array as a string
	return str.join(' ');
}

myReplace("Let us get back to more Coding", "Coding", "algorithms")