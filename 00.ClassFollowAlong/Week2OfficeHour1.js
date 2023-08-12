//Reverse in place
const reverse = arr => {
    let start = 0;
    let end = arr.length-1;

    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

let arr = [1,2,3,4,5];
//console.log("Initial Array ", arr);
//reverse(arr);
//console.log("Reversed Array ", arr);



// Rotate
const rotate = (arr, shiftBy) => {
    if (arr.length > 1) {
        shiftBy %= arr.length;
        if (shiftBy == 0) {
            return null;
        }
        let isRightShift = shiftBy>0 ? true : false;
        for (let i=0; i<Math.abs(shiftBy); i++) {
            isRightShift ? shiftRight(arr) : shiftLeft(arr);
        }
    }
}

const shiftRight = arr => {
    let temp = arr[arr.length-1];
    for (let i=arr.length-1; i>0; i--) {
        arr[i] = arr[i-1];
    }
    arr[0] = temp;
}

const shiftLeft = arr => {
    let temp = arr[0];
    for (let i=0; i<arr.length-1; i++) {
        arr[i] = arr[i+1];
    }
    arr[arr.length-1] = temp;
}

let testArray = [1,2,3,4,5,6,7];
rotate(testArray,2);
console.log(testArray.toString());
rotate(testArray,-2);
console.log(testArray);