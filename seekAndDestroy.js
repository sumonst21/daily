//remove elements from first array that are also arguments
function destroyer(arr) {

	var args = Array.from(arguments);
	var minusArr = args.splice(1,args.length);
 
    var result = arr.filter(function(val){
		for(var i = 0; i < minusArr.length; i++){
				if(val == minusArr[i])
				return false;
			
		} return true;
    }); 
	
	return result;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);