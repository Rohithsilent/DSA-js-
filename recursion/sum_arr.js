function sum(n){
    if(n ==0) return arr[0];

    return arr[n] + sum(n-1);
}


//sum of odd num in arrray


function sum_odd(n){
let isodd = (arr[n]%2 != 0);

    if(n == 0){
        return isodd ? arr[0] : 0;
    }

    return (isodd ? arr[n] : 0)+sum_odd(n-1); 
}





arr=[2,3,4,5,3]

console.log(sum(arr.length-1))

console.log(sum_odd(arr.length-1))