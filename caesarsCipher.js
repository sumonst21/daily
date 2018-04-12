function rot13(str) {

	//create an array to store the new values that have been shifted
	var shifted = [];
	
	//create an array to store the end result
	var result = [];

	//loop through str
	for(var i = 0; i < str.length; i++){
	
		//get character codes from str
		var charCode = str.charCodeAt(i);

        //if char is a space, exclamation, period, or question mark - keep it the same
        if(charCode == 32 || charCode == 33 || charCode == 46 || charCode == 63)
            shifted.push(charCode);

        //if char is between letters a-m, shift value forward 13 spaces
        if(charCode >= 65 && charCode < 78)
            shifted.push(charCode + 13);

        //if char is between letters n-z, shift value backwards 13 spaces
        if(charCode >= 78 && charCode <= 95)
            shifted.push(charCode - 13);
	
	}

	//loop over the shifted array
	for(j = 0; j < shifted.length; j++){
		
		//convert char codes to strings
		shifted[j].toString();

		//push shifted str's to result array
		result.push(String.fromCharCode(shifted[j]));

	}

	//join result array and return it
	return result.join('');

}

rot13('SERR PBQR PNZC')