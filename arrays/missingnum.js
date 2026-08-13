function missing(nums){
    let n = nums.length
    let sum = n*(n+1)/2
    let sum_arr = 0
    
    for(let i =0;i<n;i++){
        sum_arr += nums[i];
    }
        


    return sum - sum_arr

}


nums = [0,1]

console.log(missing(nums))