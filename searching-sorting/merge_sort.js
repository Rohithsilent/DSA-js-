function merge(left,right){
    let res = []
    let i = 0
    let j = 0
    
    while(i<left.length && j<right.length){
        if(left[i] < right[j]){
           res.push(left[i])
           i++
        }else{
            res.push(right[j])
            j++
        }
    }

    return [...res,...left.slice(i),...right.slice(j)]
}

function mergesort(arr){

    if(arr.length <= 1) return arr
    let mid = Math.floor(arr.length/2)

    let left = mergesort(arr.slice(0,mid))
    let right = mergesort(arr.slice(mid))

    return merge(left,right)
}

arr = [9,4,8,3,5,7]

console.log(mergesort(arr))