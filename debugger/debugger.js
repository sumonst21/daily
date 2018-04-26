<<<<<<< HEAD
function fearNotLetter(str) {

  str = str.split('');

	var arr = [];

	var charCode = 0, nextCharCode = 0, nextNextCharCode = 0;

=======
function steamrollArray(arr) {

	var result = [];

    function flatten(val){
    	
    	for(var i = 0; i < val.length; i++)
        
        if(Array.isArray(val[i]) ){
            flatten(val[i])
        
        }else{
			
            result.push(val[i]);
        }
    }

	flatten(arr);

    return result;  
>>>>>>> 4ec0e3ff7e4abae867ec272e309fbc5ad002b2f1

}

<<<<<<< HEAD
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
=======
steamrollArray([[1,2],[1,[1,3]]])
>>>>>>> 4ec0e3ff7e4abae867ec272e309fbc5ad002b2f1
