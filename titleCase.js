function titleCase(str) {

	var strSplit = str.toLowerCase().split(' ');

	var temp = [];

	for(var i = 0; i < strSplit.length; i++){
		
		temp.push(strSplit[i].charAt(0).toUpperCase() + strSplit[i].substr(1));
	}	
	return temp.join(' ');
}