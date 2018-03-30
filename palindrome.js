function palindrome(str){
	
	var regEx = /[\W_]/g;
	
	var testStr = str.toLowerCase().replace(regEx, '');
	var reverseStr = testStr.split('').reverse().join('');
	
	return testStr === reverseStr;
	

}