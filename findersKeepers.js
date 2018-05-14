//finders keepers
function findElement(arr, func) {

    var num = 0;
	var array = arguments[0];
	var funcArg = arguments[1];
	var result = [];
  

	for(var i = 0; i < arr.length; i++){
	
		if(funcArg(array[i]) == true){
			return array[i];
		}
          
        } return undefined;
	}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });