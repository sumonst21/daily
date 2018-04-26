function findElement(arr, func) {

	for(var i = 0; i < arr.length; i++){
		if(func(arr[i]) == true)
			return arr[i];
	}
}

findElement([1, 3, 5, 8, 9, 10], function(num){ return num % 2 === 0; });