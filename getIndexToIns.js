//Insert and return lowest possible index for num

function getIndexToIns(arr, num) {
	
	arr.sort(function(a,b){
		return a-b;
	});

    for(var i = 0; i < arr.length; i++){
        if(arr[i] >= num)
        	return parseInt(i);
    }
	return arr.length;
}

getIndexToIns([10, 20, 30, 40, 50], 35);