
function truncateString(str, num) {

		var dots = '...';

	if(num >= str.length)
		return str;

	if(num <= 3)
		return str.slice(0, num) + dots;
		

	if(str.length > num - 3)
		return str.slice(0, num - 3) + dots;

}