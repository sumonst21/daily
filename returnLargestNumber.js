function largestOfFour(arr) {
	
	var temp = [];	

	for(i = 0; i < arr.length; i++){
		arr[i].sort(function(a, b){

			return b - a;
			
		}); 
		temp.push(arr[i][0]);
	}

  return temp;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

