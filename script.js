function calculate() {
    p = document.getElementById("principle").value;
    r = document.getElementById("rate").value;
    n = document.getElementById("years").value;
  
    result = p * r * n;
    resultPassage = "Your resulting interest in " + n + " years will be $" + result
  
    document.getElementById("result").innerHTML = resultPassage;
  
  
  }
  
  function myFunction() {
    var val = document.getElementById("rate").value //gets the input value
    document.getElementById("rateResult").innerHTML = val //displays this value to the html page
  }
  
  //comment
