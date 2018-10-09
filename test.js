
function diffArray(arr1, arr2) {
	var newArr1 = [];
	var newArr2 = [];

	newArr1 = arr1.filter(function(input){
		
		var decision = true;

		for(i = 0; i < arr2.length; i++){

			if(input == arr2[i]){
				decision = false;
			}	
        }
	});

	
		

  return newArr1;
}

diffArray([1, 2, 3, 5, 7], [1, 2, 3, 4, 5]);