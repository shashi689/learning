function areaOfCircle(r) {
  return 3.14 * (r * r);
}
// console.log(areaOfCircle(8));

function areaOfSquare(s) {
  return s * s;
}
// console.log(areaOfSquare(8));

function simpleInterest(p, r, t) {
  return (p * r * t) / 100;
}
// console.log(simpleInterest(2000, 10, 5));

function volumeOfCylider(r, h) {
  return 3.14 * (r * r) * h;
}
// console.log(volumeOfCylider(10, 3))

const arr = ["ram", "shyam", 10, "ravi"];
// arr[0]= 'raj';
// arr.push= 'rohan';
// console.log(arr[0]);
// console.log(arr);
// console.log(arr.reverse());

function inputYear(y) {
  if (y % 4 === 0) {
    return 'a leap year';
  }
  return 'nai hai';
}
// console.log(inputYear(2024));

function enterRollNumber(n) {
  if (n === "1") {
    return "Abhijit";
  } else if (n === "2") {
    return "Abhishek";
  } else if (n === "3") {
    return "Amit";
  }
}
// console.log(enterRollNumber('3'));

function largestNumber(arr) {
  let i = arr[0];
//   console.log(arr);
//   console.log(arr.length);
  for (let k = 0; k < arr.length; k++) {
    // console.log(arr[k]);
    if (arr[k] > i) {
      i = arr[k];
    } // console.log(i);
  }
  // return i;
}

// console.log(largestNumber([24, 10, 15,32,8]));

function getLengthOfArray(arr) {
//   return arr.length;
}
//  console.log(getLengthOfArray([1,2,3,4]));

function arrayValueChanged(arr) {
  let newArray = [];
  for (let k = 0; k < arr.length; k++) {
    // console.log(arr[k]);
    const singleElement = arr[k] + "hi";
    // console.log(singleElement);
    const newElement = singleElement + "hi";
    // console.log(newElement);
    newArray.push(newElement);
  }
  return newArray;
}
// console.log(arrayValueChanged([1,2,3,4,5]));

function getVowelsCount(string){
  let count = 0;
  for(let i=0;i<string.length;i++){
    // console.log(string[i]);
    if(string[i]==('a')){
      count++;
    }
    else if(string[i]==('e')){
      count++;
    }
    else if(string[i]==('i')){
      count++;
    }
    else if(string[i]==('o')){
      count++;
    }
    else if(string[i]==('u')){
      count++;
    }
  }
  return count;
}
// console.log(getVowelsCount('ram is a good boy'))

function getOccurenceOfLetter(ekarray, letter){
  let count= 0;
  for (let i=0;i<ekarray.length;i++){
    if(ekarray[i]== letter){
      count++;
    }
  }
  return count;
}
// console.log(getOccurenceOfLetter('ye toh run kar rha mota' , 'm'));

function getOddNumCount(arr){
  let count=0;
  for(let i=0;i<arr.length;i++){
    if(arr[i] % 2 !=0){
      count++;
    }
  }
if(count==0){
  return 'no numbers'
}
else{
  return count;
}
}
// console.log(getOddNumCount([2,2,2]));














function getReversedArray(arr) {
  // return arr.length;
  let newArray = [];
  for (let k = arr.length - 1; k >= 0; k--) {
    // console.log(arr[k]);
    const returnArray = arr[k];
    newArray.push(returnArray);
  }
  return newArray;
}
// console.log(getReversedArray([1,2,3,4,5]));

function returnNameArray(arr) {
  let newNameArray = [];

  for (let i = 0; i < arr.length; i++) {
    const newElement= arr[i];
    newElement[0]='hi';
    newElement[1]='gi';
    newElement[2]='ki';
    // console.log(newElement);

    newNameArray.push(newElement);
  }
//   return newNameArray;
}
// console.log(returnNameArray(['1','2','3']));


function returnString(str) {
  console.log(str.join("/")); //join krna with any sign
  console.log(str.pop());     //pop remeoves the last el
  console.log(str.push("kill")); // new element pushed
  console.log(str);

  let newStrng= [];

  for(i=0;i<str.length;i++){
      console.log(str[i]);
      const newItem= str[i] ;

  }
}

// console.log(returnString(["ram", "hon", "got"]));


// const stringArray = ["ram"]

// function getUpdatedStringArray(arr){
    
// }
// console.log(getUpdatedStringArray(['ram', 'tan']);

// const arr=[1,2,3];
function getSumAtEvenIndex(ekarr){
    
    let sum=0;
    for(let i=0; i<ekarr.length; i++){
        // console.log(typeof ekarr[i]);
        if(!isNaN(ekarr[i])){
          if(i % 2==0){
            sum= sum + ekarr[i];
          }
        }
    }
    return sum;
}
// console.log(getSumAtEvenIndex([1,'k',3,4,'i']));

const steel= {grade:'C06', heatno:'D201', carbon:'.045%',
detail: function(){
// return steel.grade+ ' ' + steel.heatno+ ' '+ steel.carbon;
return this.grade+ ' ' + this.heatno+ ' '+ this.carbon;
}
}
// console.log(steel.grade);
// console.log(steel.carbon);
// console.log(steel.heatno);
// console.log(steel.detail());

// document.getElementById('btn').innerHTML = Date();

let value= 1;
value =Number('1');
// console.log(typeof value);
// alert(2**2);
// alert(16**(1/4));



let marks = [45,50,28,35,47];
let marks1 = [54,29,35];
marks= marks.concat(marks1);
// marks.pop();
// marks.shift();
// marks.unshift(35);
// marks.push(30);
// marks.reverse();
// console.log(marks);
 let text = 'idhar aao';
 text = text + 'matlb idhar aao';
//  console.log(text);
 let phone = 'wo wala';
 let num = 1;
//  console.log(phone + num);

 let x = 5 + 5;
let y = "5" + 5;
// let z = 6 + 5+ "Hello" + 5;
let z = Math.pow(x,3);
// console.log(z);

 
