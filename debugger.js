function sumFibs(num) {
  
	var temp = [];
	var total = 0;

  if(num > 0){
  	for(var i = 1; i <= num; i+=2){
      	temp.push(i);
    }
  }

  for(var i in temp){
  		var sum = total += temp[i]; 
  	}
  return sum + 1;
}

sumFibs(6);

