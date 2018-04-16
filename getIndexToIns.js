
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  arr = arr.sort();
  
  if(num < arr[0])
    return 0;
  
  if(num > arr[arr.length - 1])
    return arr.length - 1;
  
  for(var i = 0; i < arr.length; i++){
    if(num >= arr[i] && num <= arr[i + 1])
      return arr.splice(arr[i], 0, num);
  }
  
  return arr;
}

getIndexToIns([5, 3, 20, 3],5);