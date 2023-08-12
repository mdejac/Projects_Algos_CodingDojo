const twoSum = (nums, target) => {
    for (let i=0; i<nums.length-1; i++) {
        for (let j=i+1; j<nums.length; j++) {
            if (nums[i]+ nums[j] == target) {
                return [i,j];
            }
        }
    }
}

const twoSum2 = (nums, target) => {
    const memoryObj = {}
    for (let i=0; i<nums.length; i++) {
        let complement = target-nums[i];
        if (complement in memoryObj) {
            return [i, memoryObj[complement]]
        } else {
            memoryObj[nums[i]] = i;
        } 
    }
}

console.log(twoSum2([3,2,4],6));