function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  var srcKeys = Object.keys(source)
  var srcVals = Object.values(source);
  var srcKeyCount = 0;

  collection.filter((obj, i) => {

    let objKeys = Object.keys(obj)
    let objVals = Object.values(obj)

    for (var j in objKeys) {

      if (obj.hasOwnProperty(srcKeys[j]) && objVals[j] == srcVals[j]) {
        srcKeyCount++
      }

      if (!obj.hasOwnProperty(srcKeys[j])) {
        srcKeyCount = 0;
      }
      
      if (srcKeyCount === srcKeys.length || srcKeys.length === 1 && objVals[j] == srcVals) {
        srcKeyCount = 0;  
        arr.push(obj)
      }
    }
  })
  // Only change code above this line
  return arr;
}
whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 })
