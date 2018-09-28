function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
	var res = arr2.slice(0);

	for(var i = 0; i < arr1.length; i++) {
		
		res.splice(n, 0, arr1[i]);
		
		n++;
		
	}

  return res;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);