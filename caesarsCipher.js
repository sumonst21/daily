function rot13(str) {

	var splitStr = str.split('');
	var shifted = [];
	var result = [];

	for(var i = 0; i < splitStr.length; i++){
	
		var charCode = str.charCodeAt(i);
			
			if(charCode == 32)
				shifted.push(' ');
		
			if(charCode >= 65 && charCode < 78)
				shifted.push(charCode + 13);

			if(charCode >= 78 && charCode <= 95)
				shifted.push(charCode - 13);
				
	}

	for(j = 0; j < shifted.length; j++){
		
		shifted[j].toString();

		result.push(String.fromCharCode(shifted[j]));
				
	}

	return result.join(' ');
  	
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");