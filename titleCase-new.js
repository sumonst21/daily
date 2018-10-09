function titleCase(str) {

    var newStr = str.toLowerCase().split(' ');

  var capStr = newStr.map((char)=>{
      return char.replace(char[0], char[0].toUpperCase())
  })
  return capStr.join(' ');
}

titleCase("I'm a little tea pot");