function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  
	var srcKeys = Object.keys(source);

  	for(var i in collection){

	var colKeysArr = Object.keys(collection[i]);
	var colValsArr = Object.values(collection[i]);

	var srcKeysArr = Object.keys(source);
	var srcValsArr = Object.values(source);
	
    }

	

	return arr;
}

      
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })