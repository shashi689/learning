window.addEventListener("load", function (event) {
  // your code ....
  let inputNum = document.getElementsByClassName("btn");
  let screen = document.getElementById("display-1");
  let screen2 = document.getElementById("display-2");
  let screenValue = "";
  // console.log(inputNum);
  for (let i = 0; i < inputNum.length; i++) {
    inputNum[i].addEventListener("click", (e) => {
      clickedItem = e.target.innerText;
      //   console.log(clickedItem);
      if (clickedItem == "*") {
        screenValue += clickedItem;
        screen.value = screenValue;
      }
      else if (clickedItem == "C") {
        screenValue = " ";
        screen.value = screenValue;
        screen2.value = "";
      } 
    //   else if (clickedItem == "Del") {
    //     screenValue= '';
    //     // screenValue += clickedItem;
    //     screen.value = screenValue;
      
    //     screen.value = screen.value.toString(screen.value);

    //   } 
      else if (clickedItem == "=") {
        screen.value = eval(screenValue);
        screen2.value = "Ans" + " " + screen.value;
        let ans = screen.value;
        screenValue= '';
        if(ans == screen.value){
            screenValue += ans;    
        }
        
      } 
      else {
        screenValue += clickedItem;
        screen.value = screenValue;
      }
    });
  }
});

function getSum(array) {
  let value = 0;
  for (let i = 0; i < array.length; i++) {
    value = value + array[i];
  }
  return value;
}
// console.log(getSum([1,2]));

function getSubtractionValue(a, b) {
  let value = a - b;
  return value;
}
// console.log(getSubtractionValue(2,5));

function getMultiply(array) {
  let value = 1;
  for (let i = 0; i < array.length; i++) {
    value = value * array[i];
  }
  return value;
}
// console.log(getMultiply([1]))

function getDivisible(a, b) {
  let value = a / b;
  return value;
}
// console.log(getDivisible(1.2,6));
