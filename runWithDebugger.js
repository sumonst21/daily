function runWithDebugger(ourFunction){

	debugger;
	
	ourFunction();
	

}


//Pass function as parameter to run with debugger

runWithDebugger(function logTenNumbers(){
	
	for(var i = 0; i < 10; i++){
		
		console.log(i)
		
	}

});