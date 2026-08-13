function movezeroes(nums){
    let p =0;
    for(let i=0;i<nums.length;i++){
        if(nums[i] != 0){
            nums[p] = nums[i];
            p++;
        }
    }

    for(let i=p;i<nums.length;i++){
        nums[i] = 0;
        p++;
    }

    return nums;
}


nums = [1,0,2,0,3,0,4]

console.log(movezeroes(nums))