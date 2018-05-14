function fizzBuzz(){

	for(var i = 1; i <= 100; i++){
		if(i % 3 == 0 && i % 5 == 0){ //if i is a multiple of both 3 and 5, log 'Fizz Buzz'
			console.log('FizzBuzz');
		} else if(i % 3 == 0){ //if i is a multiple of 3, log 'Fizz'
			console.log('Fizz');

		} else if(i % 5 == 0){ //if i is a multiple of 5, log 'Buzz'
			console.log('Buzz');
		} else{
			console.log(i) //if i is neither a multiple of 3 nor 5, log i
		}
	}

}

fizzBuzz();