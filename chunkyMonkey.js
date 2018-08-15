function chunkArrayInGroups(arr, size) {
    // Break it up.
  	var res = [];
	var temp = [];

  for (var i in arr) {
    
	if (temp.length === size) { // Once temp equals size
		res.push(temp); // Push temp to res
		temp = []; // Reset temp
	}
	
	temp.push(arr[i]); // Push arr items to temp
  }
  res.push(temp); // Push remaining items to res
	
return res;
}
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)

// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]].