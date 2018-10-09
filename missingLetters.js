function fearNotLetter(str) {

  for(var i = 0; i < str.length; i++){
    
    var charCode = str.charCodeAt(i);

        if(charCode !== str.charCodeAt(0) + i)
            return String.fromCharCode(str.charCodeAt((0 + i)) - 1);
  }

  return undefined;

}

fearNotLetter("abcdefghjklmno");