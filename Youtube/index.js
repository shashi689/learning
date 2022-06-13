function areaOfCircle(r){
    return 3.14* (r * r);
}
// console.log(areaOfCircle(8));

function  areaOfSquare(s){
    return s * s;
}
// console.log(areaOfSquare(8));

function simpleInterest(p, r, t){
    return (p* r * t)/ 100;
}
// console.log(simpleInterest(2000, 10, 5));

function volumeOfCylider(r, h){
    return 3.14 * (r * r) * h;
}
// console.log(volumeOfCylider(10, 3))

const arr= ['ram', 'shyam', 10, 'ravi'];
// arr[0]= 'raj';
// arr.push= 'rohan';
// console.log(arr[0]);
// console.log(arr);
// console.log(arr.length);





    function inputYear(y){
        if (y % 4 === 0){
            return true;
        }
        return false;
    }
    // console.log(inputYear('2030'));

    function enterRollNumber(n){
        if (n === '1'){
            return 'Abhijit';
        }
        else if (n === '2'){
            return 'Abhishek';
        }
        else if (n === '3'){
            return 'Amit';
        }
    }
    // console.log(enterRollNumber('3'));
        
    function largestNumber(arr){
        let i = arr[0];
        // console.log(arr);
        // console.log(arr.length);
        for(let k= 0;k<arr.length;k++){
            // console.log(arr[k]);
            if(arr[k]>i){
              i= arr[k];
            } // console.log(i);
        }
        // return i;
        }
    
    // console.log(largestNumber([24, 10, 15,32,8]));


    function getLengthOfArray(arr){
       return arr.length;
    }
//  console.log(getLengthOfArray([1,2,3,4]));

function arrayValueChanged(arr){
    let newArray= [];
    for(let k=0;k<arr.length;k++){
        // console.log(arr[k]);
        const singleElement= arr[k]+ 'hi';
        // console.log(singleElement);
        const newElement= singleElement+ 'hi';
        // console.log(newElement);
        newArray.push(newElement);
    }
    return newArray;
}
// console.log(arrayValueChanged([1,2,3,4,5]));


function getReversedArray(arr){
    // return arr.length;
    let newArray = [];
    for(let k=arr.length-1;k>=0;k--){
        // console.log(arr[k]);
        const returnArray= arr[k]
        newArray.push(returnArray);
    }
    return newArray;
}
// console.log(getReversedArra/y([1,2,3,4,5]));

function returnNameArray(arr){
    let newNameArray =[];
    // return reverse(arr);

    for(let i=0;i<arr.length;i++){
        // console.log(i);
        // console.log(arr/[i]);
        const newElement= arr[i];
        console.log(newElement);
        newNameArray.push(newElement);
    }
    return newNameArray;
}
console.log(returnNameArray([1,2,3]));
        

    
