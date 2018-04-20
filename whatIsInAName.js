function whatIsInAName(collection, source) {
  // What's in a name?
var arr = [];
  // Only change code below this line

var myArr = [{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }];




for(var i in collection){

	var decision = true;

    var srcKeysArr = Object.keys(source);

    var srcValsArr = Object.values(source);

		for(var j in srcKeysArr){

			if(collection[i][srcKeysArr[j]] != source[srcKeysArr[j]]){
				
					decision = false;
            
			} 			
			
		}
			if(decision == true){
				arr.push(collection[i]);
            }

}

  return arr;
}
