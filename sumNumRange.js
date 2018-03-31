
function sumAll(arr) {

	//set storage to 0
	var storage = 0;
	//set min to smaller number in array
	var minVal = Math.min(arr[0], arr[1]);
	//set max to larger number in array
	var maxVal = Math.max(arr[0], arr[1]);  	

	//loop through the array, starting with the minVal
	//ending with maxVal and increment storage each time
  	for(var i = minVal;i <= maxVal; i++){
			storage += i;
		}

  return storage;
}

sumAll([1, 4]);

	