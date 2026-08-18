function binary(arr,t){
    let left = 0;
    let right = arr.length-1;

    while(left <= right){
        let middle = Math.floor((left+right)/2);

        if(arr[middle] === t){
            return middle;
        }
        else if(t< arr[middle]){
               right = middle-1;
        }
        else{
            left = middle +1;
        }
    }

    return -1;
}


arr=[-4,-1,0,3,5,7,8,9]

t = 8

let result = binary(arr,t)

console.log(result);