function pairElement(str) {
  
  var arr = [];

  str = str.toUpperCase();
  
  for(var i in str){
    
    if(str[i] == 'G')
       arr.push(['G', 'C']);
    
    if(str[i] == 'C')
       arr.push(['C', 'G']);
       
    if(str[i] == 'T')
      arr.push(['T', 'A']);
      
    if(str[i] == 'A')
       arr.push(['A', 'T']);

}
  
  
  return arr;
}

pairElement("GCG");