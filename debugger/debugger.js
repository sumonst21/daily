function fearNotLetter(str) {

  str = str.split('');

	var arr = [];

	var charCode = 0, nextCharCode = 0, nextNextCharCode = 0;



	for(var i in str){

	arr.push(str[i].charCodeAt());

	}

	for(j in arr){

		if(arr[j] !== arr[j-1] + 1){
			arr.slice(1, 0, 100)
// 			console.log(arr[j])
		}
		
	}

  return arr;
}

fearNotLetter("abce");
fearNotLetter("abce");