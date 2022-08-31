let inputNum = document.getElementsByClassName('btn');
// let inputNum = document.querySelectorAll('.btn');
// let inputNum = document.getElementsByTagName('btn');
console.log(inputNum);
// console.log(inputNum[0]);














function getSum(array) {
    let value= 0;
    for(let i=0;i<array.length;i++){
        value= value + array[i];
    }
    return value;
}
// console.log(getSum([1,2]));

function getSubtractionValue(a, b){
    let value= a - b;
    return value;
}
// console.log(getSubtractionValue(2,5));

function getMultiply(array){
    let value= 1;
    for(let i=0;i<array.length;i++){
        value= value* array[i];
    }
    return value;
}
// console.log(getMultiply([1]))

function getDivisible(a, b){
    let value= a/b;
    return value;
}
// console.log(getDivisible(1.2,6));