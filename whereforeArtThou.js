function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line

	collection.map(function(val){

		if(val == source.first || val.last == source.last){
			arr.push(val)
		}			

	});

  // Only change code above this line
	return arr;
}