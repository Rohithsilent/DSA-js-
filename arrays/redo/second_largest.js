function sl(arr){
    let slargest = -Infinity;
    let flargest = -Infinity;

    for(let i=0;i<arr.length;i++){
if(arr[i]>flargest){
slargest=flargest;
flargest = arr[i];
}
else if(arr[i]> slargest && slargest!=flargest){
slargest = arr[i];
}
}
return {flargest, slargest};

}

let arr = [3,5,2,5,6,4];

let {flargest:first, slargest:second} = sl(arr);

console.log(first);
console.log(second);