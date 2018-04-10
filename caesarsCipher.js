function rot13(str) {

	var splitStr = str.split('');
	var shifted = [];
	

	for(var i = 0; i < splitStr.length; i++){
	
		var charCode = str.charCodeAt(i);
			
			if(charCode == 32)
				shifted.push(' ');
		
			if(charCode >= 65 && charCode < 78)
				shifted.push(charCode + 13);

			if(charCode >= 78 && charCode <= 95)
				shifted.push(charCode - 13)
				
		
	}
  
	console.log(shifted)

}

// Change the inputs below to test
rot13("SERR PBQR PNZC");