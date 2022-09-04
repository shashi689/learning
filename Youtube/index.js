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
    return "a leap year";
  }
  return "nai hai";
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
    console.log(arr[k]);
    if (arr[k] > i) {
      i = arr[k];
      // console.log(i);
    }
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

function getVowelsCount(string) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    // console.log(string[i]);
    if (string[i] == "a") {
      count++;
    } else if (string[i] == "e") {
      count++;
    } else if (string[i] == "i") {
      count++;
    } else if (string[i] == "o") {
      count++;
    } else if (string[i] == "u") {
      count++;
    }
  }
  return count;
}
// console.log(getVowelsCount('ram is a good boy'))

function getOccurenceOfLetter(ekarray, letter) {
  let count = 0;
  for (let i = 0; i < ekarray.length; i++) {
    if (ekarray[i] == letter) {
      count++;
    }
  }
  return count;
}
// console.log(getOccurenceOfLetter('ye toh run kar rha mota' , 'm'));

function getOddNumCount(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      count++;
    }
  }
  if (count == 0) {
    return "no numbers";
  } else {
    return count;
  }
}
// console.log(getOddNumCount([2,2,2]));

function getSumOfOddNumber(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 != 0) {
      sum = sum + arr[i];
    }
  }
  return sum;
}
// console.log(getSumOfOddNumber([1,2,3,1]));

function factorial(number) {
  let value = 1;
  for (let i = number; i >= 1; i--) {
    value = value * i;
  }
  return value;
}
// let number =7;
// let value= factorial(number);
// console.log('the factorial of'+' '+ number +' '+ 'is'+' '+ value);

function getNoOfWordsInArgument(sentence) {
  let numbers = sentence.split(" ");
  return numbers.filter((word) => word !== " ").length;
}
// console.log(getNoOfWordsInArgument('ram is good'));

function getPalindrome(string) {
  if (!string || string.length < 0) {
    return alert("likh bhi do kuch");
  } else {
    let newString = "";
    for (let i = string.length - 1; i >= 0; i--) {
      newString = newString + string[i];
    }
    return newString == string;
  }
}
// console.log(getPalindrome(''));

// function getFirstUpperCase(string){
// let newStr= string[0].toUpperCase();
// return newStr + string.slice(1);
// }
// console.log(getFirstUpperCase('mota'));

function getFirstUpperCase(string) {
  let newStr = "";
  let ekAurNew = "";
  for (let i = 1; i < string.length; i++) {
    // console.log(string.split(' '));
    newStr = newStr + string[i];
    // console.log(newStr);
    ekAurNew = string[0].toUpperCase();
    // console.log(ekAurNew);
  }
  return ekAurNew + newStr;
}
// console.log(getFirstUpperCase('ho gya bhai'));

function getNextChar(string, char) {
  let LETTERS = "abcdefghijklmnopqrstuvwxyz";
  let newStr = "";
  let nextChar = "";
  for (let k = 0; k < LETTERS.length; k++) {
    if (LETTERS[k] === char) {
      nextChar = LETTERS[k + 1];
    }
  }

  for (let i = 0; i < string.length; i++) {
    if (string[i] === char) {
      newStr = string.replace(char, nextChar);
      console.log(newStr);
    }
  }
  // return newStr;
}
// console.log(getNextChar('ram is mar','m'));

function getNextChar(char) {
  let LETTERS = "abcdefghijklmnopqrstuvwxyz";
  let nextchar = "";
  for (let i = 0; i < LETTERS.length; i++) {
    if (LETTERS[i + 25] === char) {
      return LETTERS[i + 25];
    } else if (LETTERS[i] === char) {
      nextchar = LETTERS[i + 1];
    }
  }
  return nextchar;
}
function getReplacedString(string, char) {
  let nextchar = getNextChar(char);
  let newStr = string.split("");

  for (let k = 0; k < string.length; k++) {
    if (string[k] === char) {
      newStr[k] = nextchar;
    }
  }
  return newStr.join("");
}
// console.log(getReplacedString('zebras zeal zone wise ', 'e'));

function getNextLeapYear(year) {
  let inputYear = year;
  if (year % 4 === 0) {
    let nextLeapYear = inputYear + 4;
    return nextLeapYear;
  } else if (year % 4 != 0) {
    alert("Please try another year");
  }
}
// console.log(getNextLeapYear(2011));

function getGreatestNumber(array) {
  let num1 = [];
  for (let i in array) {
    if (array[i] > num1) {
      num1 = array[i];
    }
  }
  return num1;
}
// console.log(getGreatestNumber([10,50,31,11,30]));

function getSmallestNumber(array) {
  let num1 = array[0];
  for (let i in array) {
    if (array[i] < num1) {
      num1 = array[i];
    }
  }
  return num1;
}
// console.log(getSmallestNumber([1,2,3]));

function getSmallestNumber(array) {
  let smallestNum = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < smallestNum) {
      smallestNum = array[i];
    }
  }
  return smallestNum;
}
// console.log(getSmallestNumber([5,2,3]))

//splice method:








function checkKeyWord(object) {
  let obj = object;
  
  if (obj == object.name) {
    newObj= obj['name'] = 'shayam';

  }
  return obj;
}
console.log(checkKeyWord({name: 'Ram', age: 30, likes: 'Pizza, Bread',}))

const getReversedArray = (arr) => {
  let newArray = [];
  for (let k = arr.length - 1; k >= 0; k--) {
    const returnArray = arr[k];
    newArray.push(returnArray);
  }
  return  newArray ;
}
// console.log(getReversedArray([1,2,3,4,5]));


const arrayReversed = (array)=> {
 const reversedArray = array;
 return reversedArray.reverse(array);
}
// console.log(arrayReversed([1,2,3,4,5]));



function returnNameArray(arr) {
  let newNameArray = [];

  for (let i = 0; i < arr.length; i++) {
    const newElement = arr[i];
    newElement[0] = "hi";
    newElement[1] = "gi";
    newElement[2] = "ki";
    // console.log(newElement);

    newNameArray.push(newElement);
  }
  //   return newNameArray;
}
// console.log(returnNameArray(['1','2','3']));

function returnString(str) {
  console.log(str.join("/")); //join krna with any sign
  console.log(str.pop()); //pop remeoves the last el
  console.log(str.push("kill")); // new element pushed
  console.log(str);

  let newStrng = [];

  for (i = 0; i < str.length; i++) {
    console.log(str[i]);
    const newItem = str[i];
  }
}

// console.log(returnString(["ram", "/hon", "got"]));

// const stringArray = ["ram"]

// function getUpdatedStringArray(arr){

// }
// console.log(getUpdatedStringArray(['ram', 'tan']);

// const arr=[1,2,3];
function getSumAtEvenIndex(ekarr) {
  let sum = 0;
  for (let i = 0; i < ekarr.length; i++) {
    // console.log(typeof ekarr[i]);
    if (!isNaN(ekarr[i])) {
      if (i % 2 == 0) {
        sum = sum + ekarr[i];
      }
    }
  }
  return sum;
}
// console.log(getSumAtEvenIndex([1,'k',3,4,'i']));

const steel = {
  grade: "C06",
  heatno: "D201",
  carbon: ".045%",
  detail: function () {
    // return steel.grade+ ' ' + steel.heatno+ ' '+ steel.carbon;
    return this.grade + " " + this.heatno + " " + this.carbon;
  },
};
// console.log(steel.grade);
// console.log(steel.carbon);
// console.log(steel.heatno);
// console.log(steel.detail());

// document.getElementById('btn').innerHTML = Date();

// let value= 1;
// value =Number('1');
// console.log(typeof value);
// alert(2**2);
// alert(16**(1/4));

let marks = [45, 50, 28, 35, 47];
let marks1 = [54, 29, 35];
marks = marks.concat(marks1);
// marks.pop();
// marks.shift();
// marks.unshift(35);
// marks.push(30);
// marks.reverse();
// console.log(marks);
let text = "idhar aao";
text = text + "matlb idhar aao";
//  console.log(text);
let phone = "wo wala";
let num = 1;
//  console.log(phone + num);

let x = 5 + 5;
let y = "5" + 5;
// let z = 6 + 5+ "Hello" + 5;
let z = Math.pow(x, 3);
// console.log(z);
