function printNumber(value) {
    if (value < 0){
      console.log("Boulet !");
      return(false);
    }
    for (var i = 0; i <= value; i++) {
      console.log(i);
      if (i == value)
      return true;
  }
  }
  printNumber(-1)