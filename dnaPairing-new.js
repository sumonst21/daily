function pairElement(str) {

  var strArr = str.split('');

	for(var i in strArr) {
		
		if (strArr[i] === 'G') {
			strArr[i] = ['G', 'C']
		}
		if (strArr[i] === 'C') {
			strArr[i] = ['C', 'G']
		}
		if (strArr[i] === 'A') {
			strArr[i] = ['A', 'T']
		}
		if (strArr[i] === 'T') {
			strArr[i] = ['T', 'A']
		}
	}

  return strArr;
}

pairElement("GCG");