function slasher(arr, howMany) {

    if(howMany === 0){
      console.log(arr.splice(0, arr.length))
    } else if(howMany > 0 && howMany < arr.length){
    console.log(arr.splice(arr.length - (howMany - 1)));
    }
    // console.log(arr, howMany);
    // console.log(arr);
  }
  
  slasher([1, 2, 3], 4);
  