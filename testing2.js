function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line

  	//create an array of keys from the 'collection' object
  	var collectionKeysArr = Object.keys(collection);
  
	//create an array of keys from the 'source' object
  	var sourceKeysArr = Object.keys(source);
  
  
  for(var i in collectionKeysArr){
   
    for(var j in sourceKeysArr){

        var srcKey = sourceKeysArr[j];
      
        //var colKey = collectionKeysArr[i];
        var collectionValuesArr = Object.values(collection[i]);

        var srcVal = source[srcKey];
      
	  	//index the objects in 'collection' array
  		var colKeyObj = collection[i];
		
        for(var k in collectionValuesArr){
          if(collectionValuesArr[k] === srcVal){
            arr.push(colKeyObj);
          }
       }
    }
  }

  return collectionValuesArr[k];
  
  //colKey = 2
  //colKeyObj = {"first": "Tybalt", "last": "Capulet"}
  //srcKey = last
  //srcVal = Capulet
}
whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 })