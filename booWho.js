function booWho(bool) {

    
  if(bool === 1 || bool == 'true'){
    var y = Boolean(false);
    return y;
  }
  
  if(bool == false || bool == true){
    var x = Boolean(true);
    return x;
  }

    return false;
  
} 

booWho(true);