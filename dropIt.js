function dropElements(arr, func) {

	var temp = [];

	for(var i = 0; i < arr.length; i++){
		
		if(func(arr[i]) == true){
			//find first true instance, splice rest of array after it
			temp.push(arr.splice(i, arr.length));
            return temp[0];
		}
      
      //otherwise, return an empty arr  
	} return temp = [];
	
}

dropElements([1, 2, 3, 4], function(n) {return n > 5;});