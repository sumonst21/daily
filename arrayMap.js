var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var abbrevMonths = months.map((month) => {
	return month.slice(0,3);
});

console.log(abbrevMonths);