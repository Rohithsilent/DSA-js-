//write a function that searches for an element in an array and returns the index, if the element is not present then just return -1.


function find(arr,element) {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == element) {
            return i;
        }
    }
    return -1;
}

let arr = [1, 2, 3, 4, 5, 6, 7];
let element = 7;

let index = find(arr, element);
console.log(index);


//write a function that returns the number of negative numbers in an array

function negative(arr) {
    let countn = 0;
    let countz = 0;
    let countp = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < 0) {
            countn++;
        }
        else if (arr[i] == 0) {
            countz++;
        }
        else {
            countp++;
        }
    }
    return { countn, countp, countz };
}

let arr1 = [-1, 3, 0, -4, 5, 0, -4, 6];
let { countn: neg, countp: positive, countz: zero } = negative(arr1);

console.log("negative" + neg);
console.log("positive" + positive);
console.log("zero" + zero);



//write a function that returns the largest number in an array


function larg(arr) {
    let largest = -Infinity;// can use arr[0] if u know that the array is not empty
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }

    return largest;
}

let arr3 = [10,3,5,6,7,1];
console.log(larg(arr3));

//write a function that returns the least number in an array


function small(arr) {
    let minimum = Infinity;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < minimum) {
            minimum = arr[i];
        }
    }

    return minimum;
}

let arr4 = [10,3,5,6,7,1];
console.log(small(arr4))




