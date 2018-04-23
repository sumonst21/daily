
function convertHTML(str) {
  
   str = str.split('');

for(var i in str){
  
    if(str[i] == '&')  
      str[i] = '&amp;';

    if(str[i] == '<'){
      str[i] = '&lt;';
    }

    if(str[i] == '>'){
      str[i] = '&gt;';
    }
    
    if(str[i] == '"'){
      str[i] = "&quot;";
    }
    
    if(str[i] == '\''){
      str[i] = '&apos;';
    }
}
  
   return str.join('');
}

convertHTML('Stuff in "quotation marks"');