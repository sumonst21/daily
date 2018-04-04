
function mutation(arr) {
  
  var item1 = arr[0].toLowerCase();
  var item2 = arr[1].toLowerCase();

  for(var i = 0; i < item2.length; i++){
     
    if(item1.indexOf(item2.charAt(i)) == -1 )
	return false;
    
  } return true;

}

mutation(["hello", "hey"]);