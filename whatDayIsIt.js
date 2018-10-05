function whatDayIsIt(){
	var d = new Date();
	var day = d.getDay();

	var msg = 'Today is ';

	if(day == '0')
		return msg + 'Sunday';
	if(day == '1')
		return msg + 'Monday';
	if(day == '2')
		return msg + 'Tuesday';
	if(day == '3')
		return msg + 'Wednesday';
	if(day == '4')
		return msg + 'Thursday';
	if(day == '5')
		return msg + 'Friday';
	if(day == '6')
		return msg + 'Saturday';
};

console.log(whatDayIsIt())
