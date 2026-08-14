function sum(n){
    if(n ==0) return arr[0];

    return arr[n] + sum(n-1);
}

arr=[1,3,4,5,3]

console.log(sum(arr.length-1))