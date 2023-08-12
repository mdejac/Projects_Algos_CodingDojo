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
console.log("Initial Array ", arr);
reverse(arr);
console.log("Reversed Array ", arr);
console.log();

//Rotate
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

arr = [1,2,3,4,5];
console.log("Initial Array ", arr);
rotate(arr, 2);
console.log("Rotated by 2 ", arr);
arr = [1,2,3,4,5];
console.log("Initial Array ", arr);
rotate(arr, -2);
console.log("Rotated by -2 ", arr);
console.log();

//Filter Range
const filterRange = (arr, minValue, maxValue) => {
    if (arr.length) {
        for (let i=0; i<arr.length; i++) {
            if (arr[i] <= minValue || arr[i] >= maxValue) {
                removeAt(arr,i);
                i--;
            }
        }
    }
    return arr;
}

const removeAt = (arr, index) => {
    if (arr.length) {
        for (let i=index+1; i<arr.length; i++) {
            arr[i-1] = arr[i];
        }
        arr.length--;
    }
    return arr;
}

arr = [1,2,3,4,2];
console.log("Initial Array ", arr);
filterRange(arr, 1, 4)
console.log("Filter range 1-4 ", arr);
console.log();

//Concat
const concat = (arr1, arr2) => {
    //return [...arr1, ...arr2];
    let retArr = new Array();
    for (let i=0; i<arr1.length; i++) {
        retArr.push(arr1[i]);
    }
    for (let i=0; i<arr2.length; i++) {
        retArr.push(arr2[i]);
    }
    return retArr;
}
let arr1 = ['a','b'];
let arr2 = [1,2];
console.log("Original array1 : ",arr1);
console.log("Original array2 : ",arr2);
console.log("New concat array : ",concat(arr1, arr2));
console.log("Original array1 : ",arr1);
console.log("Original array2 : ",arr2);