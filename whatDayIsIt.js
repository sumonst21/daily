function whatDayIsIt(){
	var d = new Date();
	var day = d.getDay();

	if(day == '0')
		return 'Sunday';
	if(day == '1')
		return 'Monday';
	if(day == '2')
		return 'Tuesday';
	if(day == '3')
		return 'Wednesday';
	if(day == '4')
		return 'Thursday';
	if(day == '5')
		return 'Friday';
	if(day == '6')
		return 'Saturday';
}