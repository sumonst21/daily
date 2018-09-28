function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  	var arr2Copy = arr2.slice();
	for (var i = 0; i < arr1.length; i++) {
		arr2Copy.splice(n++, 0, arr1[i]);
	}
  return arr2Copy;
}