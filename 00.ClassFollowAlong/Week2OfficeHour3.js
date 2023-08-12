const isPalindrome = x => {
    if (x < 0) {
        return false;
    }
    let str = x.toString();
    for (let i=0; i<str.length/2; i++) {
        if (str[i] != str[str.length-1-i]) {
            return false;
        }
    }
    return true;
}

// console.log(isPalindrome(1234421));

const firstUniqChar = s => {
    let memory = {};
    for (let i=0; i<s.length; i++) {
        if (s[i] in memory) {
            memory[s[i]] = [i, memory[s[i]][1]+1];
             
        } else {
            memory[s[i]] = [i,1];
        }
    }
    for (key in memory) {
        if (memory[key][1] == 1) {
            return memory[key][0];
        }
    }
    return -1;
}

console.log(firstUniqChar("aabb"));