function max(nums){
    let p1 = 0;
    let p2 = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i] == 1){
            p1 += 1;
        }else{
            if(p1 > p2){
                p2 = p1;
            } // or p2 = Math.max(p2,p1)

            p1 =0;
        }
    }

    return Math.max(p1,p2);
}


nums = [1,1,0,1,1,1,1,1,1,0,1,1]
console.log(max(nums))
