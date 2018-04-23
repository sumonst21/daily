function rot13(str) { // LBH QVQ VG!
  
	str = str.toLowerCase().split('');

	var result = [];

    var shiftLetters = {

      'a': 'n',
      'b': 'o',
      'c': 'p',
      'd': 'q',
      'e': 'r',
      'f': 's',
      'g': 't',
      'h': 'u',
      'i': 'v',
      'j': 'w',
      'k': 'x',
      'l': 'y',
      'm': 'z',

    };
  
    var keys = Object.keys(shiftLetters);
    var values = Object.values(shiftLetters);

    for(i in keys){
	if(str.includes(keys))
        result.push(values[i]);

    	} return result;
	}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
