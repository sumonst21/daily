function spinalCase(str) {
  
  var reUp = /[A-Z]/;
  var reLow = /[a-z]/;
  
  var reSpecial = /[_\s]/g;
  
 
  for(var i = 1; i < str.length; i++){
    
    if(reUp.test(str[i])){
      
      if(reLow.test(str[i - 1]))
 
      str = str.slice(0, i) + '-' + str.slice(i);
      	
        i++;
    }
  }
  
  return str.toLowerCase().replace(reSpecial, '-');
 
}

spinalCase("This Is Spinal Tap");
