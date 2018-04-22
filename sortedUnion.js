function uniteUnique(arr) {

var temp = [];

for(var i = 0; i < arguments.length; i ++){

	for(var j = 0; j < arguments[i].length; j++){

	temp.push(arguments[i][j])
	

      }

    }

	return temp.reduce((x,y) => x.includes(y) ? x : [...x, y], []);

}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);