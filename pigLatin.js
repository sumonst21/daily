function translatePigLatin(str) {

  //turn str into array
  str = str.split('');

  //check for vowels
  var vowel = /[aeiouAEIOU]/.test(str[0]);

  //if str starts with vowel
  if(vowel == true){

  	  //join str and append 'way'
	  return str.join('') + 'way';

	}

	//if second letter of string is an 'l', also move that to end of string
	//as a string cluster, for instance, 'glove' returns 'oveglay'
    else if(str[1] == 'l'){
      	str.push(str[0]);
        str.push(str[1]);
		str.shift();
        str.shift();
		str.push('ay');
    }
  
  	//otherwise, take first letter and move to end of arr
	//then add 'ay' to the end of arr
	else{
		str.push(str[0]);
		str.shift();
		str.push('ay');
	}
 
  //return arr as string
  return str.join('');
}
translatePigLatin('algorithm');