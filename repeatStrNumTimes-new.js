function repeatStringNumTimes(str, num) {

  //store str's in temp array
  var temp = [];
  
  //if num is not positive, return empty string
  if(num < 1)
    return '';
  //push str num times into temp array 
  for(i = 0; i < num; i++){
    temp.push(str);
  }
  //return str
  return temp.join('');
}

repeatStringNumTimes("abc", 3);