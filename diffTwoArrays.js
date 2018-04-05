function diffArray(arr1, arr2) {
  var newArr1 = [];
  var newArr2 = [];
  

  //filter arr1
  newArr1 = arr1.filter(function(num){
      
      //by default decision is true
      var decision = true;
    
    	//loop through arr2 within the arr1 filter
      for(i = 0; i < arr2.length; i++){
          
          //if any 'num' in arr1 is equal to a value in arr2
          //set decision to false
          if(num == arr2[i]){
           decision = false; 
        }
         // number is kept when decision is true 
      } return decision;
  });

  newArr2 = arr2.filter(function(num){
      
      var decision = true;
    
      for(i = 0; i < arr1.length; i++){
          
          if(num == arr1[i]){
           decision = false; 
        }
          
      } return decision;
  });

  //combine two arrays into one
  return newArr1.concat(newArr2);
}

diffArray([1, 2, 3, 5, 7], [1, 2, 3, 4, 5]);