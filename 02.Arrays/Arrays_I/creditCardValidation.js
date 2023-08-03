const isCreditCardValid = digitArr => {
    if (digitArr.length >= 13 && digitArr.length <= 19) {
        for (let i=digitArr.length-2; i >= 0; i=i-2) {
            digitArr[i]*=2;
            if (digitArr[i] > 9) {
                digitArr[i] -= 9;
            }
        }
        let total = 0;
        for (let i=0; i<digitArr.length; i++){
            total += digitArr[i];
        }
        if (total % 10 == 0) {
            return true;
        }
    }
    return false;
}

console.log(isCreditCardValid([4,4,1,7,1,2,3,4,5,6,7,8,9,1,1,3]));
console.log(isCreditCardValid([4,4,1,7,1,2,3,4,5,6,7,8,9,1,1,4]));