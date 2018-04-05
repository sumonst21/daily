function findLongestWord(str) {
	
	//Split the string into an array
	var splitStr = str.split(' ')
	//Initialize the longestWord variable
	var longestWord = 0;
	
	//Iterate through each string within the array
	for(var i = 0; i < splitStr.length; i++){
		
		//If a string.length is longer than longestWord, set new longestWord
		if(splitStr[i].length > longestWord)
			longestWord = splitStr[i].length;	
				
	}

		return longestWord;

}