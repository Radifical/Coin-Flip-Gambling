window.onload = function(){ 
  document.getElementById('click').onclick = click;
  document.getElementById('addMoney').onclick = addMoney;

  var bal = 10;
  var heads = 0;
  var tails = 0;
  var choice = document.getElementById('mySelect').value;
  var random = Math.floor(Math.random() * 200);
  function click() {  
      x = (Math.floor(Math.random() * 2) == 0);
      if(x){
        flip("heads");
        if(choice == "head"){
          bal = bal*2;
          console.log("won by heads");
        }
        else{
          bal = bal*0;
        }
      }else{
          flip("tails");
          if(choice == "tails"){
            bal = bal*2;
            console.log("won by tails");
          }
          else{
            bal = bal*0;
          }
      }
  };

  function addMoney(){
    bal = bal + random;
    document.getElementById("balance").innerHTML = bal;

  }
  function flip(coin) {
      document.getElementById("result").innerHTML = coin;
      document.getElementById("balance").innerHTML = bal;
      console.log(bal);
  };
};

