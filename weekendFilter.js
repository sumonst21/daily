var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

var weekends = daysOfWeek.filter((weekend) => {
	return weekend[0] === 'S';
});

console.log(weekends);