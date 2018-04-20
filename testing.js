function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line

  
  
  //create an array of keys from the 'source' object
  var sourceKeysArr = Object.keys(source);
  
  var collectionKeysArr = Object.keys(collection[1]);
  
  var last = 'last';
  
  //index the first key from 'source' object ('last')
  var srcKey = sourceKeysArr[0];
  
  //index the last object in 'collection' array ('first: tybalt, last: capulet')
  var colKey = collection[2];
  
  
  var srcValue = source[srcKey];
  
  
  return srcValue;

//   return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });