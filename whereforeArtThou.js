function whatIsInAName(collection, source) {
  // What's in a name?
var arr = [];
  // Only change code below this line

for(var i in collection){ //loop through objects in the collection array

	var decision = true; //set boolean check as true

    var srcKeysArr = Object.keys(source); //define all keys in source

    var srcValsArr = Object.values(source); //define all values in source

		for(var j in srcKeysArr){  //loop through srcKeysArr

			if(collection[i][srcKeysArr[j]] != source[srcKeysArr[j]]){ //if value in collection does not match value in source
				
				decision = false;
            
			} 			
			
		}
			if(decision == true){ //if they match 
				arr.push(collection[i]); //add the collection objects that have matches to arr
            }

}

  return arr;
}
whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });