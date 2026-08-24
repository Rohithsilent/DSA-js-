function two_sum(arr,t){

    let hash = new Map();

    for(let i=0;i<arr.length;i++){
        let comp = t-arr[i];
        if(hash.has(comp)){
            return [hash.get(comp),i];
        }
        hash.set(arr[i],i);

    }
   return null;
}


arr=[4,6,5,1,15]
t = 9
console.log(two_sum(arr,t));