function repeatStringNumTimes(str, num) {
	
	var temp = [];  

	if(num < 0)
	return "";

	for(var i = 0; i < num; i++){
		
		temp.push(str);
		
	}
	
  return temp.join('');
}

repeatStringNumTimes("abc", -2);