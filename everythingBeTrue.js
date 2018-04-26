function truthCheck(collection, pre) {

	var count = 0;

  for(var obj in collection){

		if(collection[obj].hasOwnProperty(pre))
			if(Boolean(collection[obj][pre]))
				count++;
  }

	return count == collection.length;

}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
