function sumPrimes(num) {
  
	var temp = [];

	for(var i = 2; i < num; i++){

		if(i % 2 != 0){

		temp.push(i)

        }
    }
	return temp;
}

sumPrimes(10);