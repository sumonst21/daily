function palindrome(str){
	var re = /[\W_]/;	
	var testStr = str.toLowerCase().replace(re, '');
	var reverseStr = testStr.split('').reverse().join('');
	
	return testStr === reverseStr;
}