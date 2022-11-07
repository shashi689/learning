window.addEventListener("load", function (event) {
    main()
})

function main(){

    let inputNum = document.getElementsByClassName("btn");
  let screen = document.getElementById("calculation-bar");
  let screen2 = document.getElementById("ans-bar");
  let screenValue = "";
  // console.log(inputNum);
  for (let i = 0; i < inputNum.length; i++) {
    inputNum[i].addEventListener("click", (e) => {
      clickedItem = e.target.innerText;
       if (clickedItem == "C") {
        screenValue = " ";
        screen.value = screenValue;
        screen2.value = "";
      } 
      else if (clickedItem == "Del") {
        screenValue= '';
        // screen.value += screenValue;
        let string = screen.value.toString(screen.value);
        // console.log(string);
        string = string.slice(0, -1);
        // console.log(string);
       screen.value = string;
        if(screen.value == string){
            screenValue += string; 
        }
        
      } 
      else if (clickedItem == "=") {
        screen.value = eval(screenValue);
        screen2.value = screenValue;
        let calculatedValue = screen.value;
        screenValue= '';
        if(calculatedValue == screen.value){
            screenValue += calculatedValue;    
        }
        
      } 
      else {
          screenValue += clickedItem;
          screen.value = screenValue;
        }
    });
}
}



