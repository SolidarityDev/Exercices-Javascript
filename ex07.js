function checkParams(value1, value2){
    var a = typeof(value1);
    var b = typeof(value2);
  
  
    if (value1 == value2)
      console.log("Same value");
    
    if (a == b && value1 !== value2)
      console.log("Same type");
  
    else if(value1 == value2 && value1 === value2)
      console.log("Same type and value");
  }
  
  checkParams(2, "2");
  