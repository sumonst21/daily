// function sumFibs(num) {

//   var temp = [];
  
//   if(num > 0){
	
// 	for(var i = 1; i <= num; i+=i){

// 		temp.push(i)	
// 	}	
	
//   }
//     return temp;

//   }

// sumFibs(9);




function sumFibs(num) {

  var temp = [1,1];
  
  if(num > 0){
	
	for(var i = 1; i <= num; i=temp[i]+temp[-1]){

		temp.push(i)
		
	}	
	
  }
  
  
    return temp;

  }


sumFibs(120);