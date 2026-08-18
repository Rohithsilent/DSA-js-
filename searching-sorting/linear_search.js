function linear(arr, t){
    for(let i=0;i<arr.length;i++){
        if(arr[i] == t){
            return i;
        }
    }

    return -1;
}


arr = [1,2,3,4,5]
t = 7
console.log(linear(arr,t))