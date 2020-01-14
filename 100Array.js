  var total = 0;
  var cars = ["Saab", "Volvo", "BMW"];
  var numbers = [];
  var length = [100];

  for (var i  = 0; i < length; i++){
     numbers.push(i+1);
      total  += numbers[i];

   }
   document.getElementById("displayPrice").innerHTML = total;