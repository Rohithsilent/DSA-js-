function find(arr,n){
    for(let i = 0;i<arr.length;i++){
        if(arr[i] == n){
            return i;
        }
        
    }

    return -1;
}


let arr = [1,2,3,4,5]
let n = 5

let result = find(arr,n)

console.log(arr[result])