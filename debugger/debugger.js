function truthCheck(collection, pre) {
  // Is everyone being true?

  for(var obj in collection){

  	for(var val in collection[obj])

		var colObjKeys = Object.keys(collection[obj])
			
		colObjKeys.forEach(function(check){
			if(check == true)
				return true;
			else{
				return false;	
			}
		})

  }

}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
