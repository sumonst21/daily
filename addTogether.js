function addTogether() {

	var args = arguments;

    function sumTwoAnd(arg){ //function that handles a single argument
             	
			return arg + 2; //returns argument + 2
		}

	for(var i in args){ 
		if(args[i] !== Number) //check if argument is a number
			return undefined; // if not, return undefined

    else if(args.length == 1) //if there's only one argument, run sumTwoAnd()
        return sumTwoAnd(args[0])
		
		
	}
 
}

addTogether("http://bit.ly/IqT6zt");