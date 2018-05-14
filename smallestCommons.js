function smallestCommons(arr) {
  
var range = arr.sort();
var array = [];

for(var i = arr[0]; i <= arr[arr.length-1]; i++){
  array.push(i);
}
  
var x = true;
var LCM = 0;
  
while(x){
  LCM++;
  for(var j = array[0]; j <= array[array.length-1]; j++){
    if(LCM % j !== 0){
      break;
    } 
    else if(j == array[array.length-1]){
        x = false;
      }
    }
  }
  return LCM;
}
smallestCommons([23, 18]);