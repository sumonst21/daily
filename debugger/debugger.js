function steamrollArray(arr) {

	var result = [];

    function flatten(val){
    	
    	for(var i = 0; i < val.length; i++)
        
        if(Array.isArray(val[i]) ){
            flatten(val[i])
        
        }else{
			
            result.push(val[i]);
        }
    }

	flatten(arr);

    return result;  

}

steamrollArray([[1,2],[1,[1,3]]])