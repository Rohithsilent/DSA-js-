//approach 1 (hashmap)

function singlehash(nums){
    let hash ={};

    for(let i=0;i<nums.length;i++){
        if(!hash[nums[i]]){
            hash[nums[i]] = 1;
        }
        else{
            hash[nums[i]] ++;
        }
    }

    for(let i=0;i<nums.length;i++){
        if(hash[nums[i]] == 1){
            return nums[i];
        }
    }
}

//approach 2 (xor)

function singlexor(num){
    let xor = 0;
    for(let i=0;i<nums.length;i++){
        xor ^= nums[i];
    }

    return xor;
}

nums = [2,2,3,3,4]
console.log(singlehash(nums))
console.log(singlexor(nums))