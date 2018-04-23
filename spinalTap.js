//Convert strings to spinal-case
function spinalCase(str) {
  
  //regular expression for uppercase A-Z
  var reUp = /[A-Z]/;

  //regular expression for lowercase a-z
  var reLow = /[a-z]/;

  //regular expression for all spaces and underscores
  var reSpecial = /[_\s]/g;
  
  //loop through str
  for(var i = 1; i < str.length; i++){
    
    //check if str[i] is uppercase
    if(reUp.test(str[i])){
      
      //check if letter before it is lowercase
      if(reLow.test(str[i - 1]))
      
      //if so, add a dash between them
      str = str.slice(0, i) + '-' + str.slice(i);
      	
        //increment over i to account for the '-' that was added
        i++;
    }
  }
  
  //return str to lowercase, replace spaces & underscores w/ dashes
  return str.toLowerCase().replace(reSpecial, '-');
 
}

spinalCase("This Is Spinal Tap");
