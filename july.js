function july(day){

	let suffix = "";

	if (day > 0 && day <= 31 ) {
	  if (day === 1 || day[1] === 1) {
	    suffix = 'st'
	  } else if (day === 2 || day[1] === 2) {
	    suffix = 'nd'
          } else if (day === 3 || day[1] === 3) {
	    suffix = 'rd'
	  } else {
	    suffix = 'th'
	  }	
	} else {
	  console.log('Please enter a day between 1 and 31.');
	}
  	
	console.log(`Today is the ${day}${suffix} of July`);
}

july(1)
july(2)
july(3)
july(1)
july(21)
july(22)
july(23)
july(24)
july(30)
july(31)
july(32)
