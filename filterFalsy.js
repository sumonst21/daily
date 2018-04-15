// Remove all falsy values from array
function bouncer(arr) {
	
	for(var i = 0; i < arr.length; i++){
		var trueArr = arr.filter(function(val){
			return val;
        });
      return trueArr;
	}
}