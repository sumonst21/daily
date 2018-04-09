//Seek and destroy

function destroyer(arr) {

	var args = Array.from(arguments);
	var minusArr = args.splice(1,args.length);
 
    var result = arr.filter(function(val){
        minusArr.indexOf(val) == -1;
    }); return result;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3,4);