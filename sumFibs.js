function sumFibs(num) {
  
  var result = [1];
  
  var a = 0; var b = 1; var f = 1;
  
  for(var i = 2; i <= num; i++){
    
    f = a + b;
    
    a = b;
    
    b = f;

    if(f % 2 != 0 && f <= num)
		result.push(f);

  }

function sumArr(total, number){
    return total + number;
}

  return result.reduce(sumArr);

}


sumFibs(1000);