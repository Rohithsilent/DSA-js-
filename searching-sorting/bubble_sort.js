function bubble(arr){
    let n = arr.length;
    for(let i=1;i<n;i++){
        let swapped = false;
        for(let j=0;j<n-i;j++){
            if(arr[j]>arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
            swapped = true;
        }
        }
        if(!swapped) break;
    }

    return arr;
}


arr = [3,2,5,4,9,8]

console.log(bubble(arr))


