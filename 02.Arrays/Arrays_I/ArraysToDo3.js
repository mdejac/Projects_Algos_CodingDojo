//Remove Negatives
const removeNegatives = arr => {
    if (arr.length) {
        for (let i=0; i<arr.length; i++) {
            if (arr[i] < 0) {
                removeAt(arr, i);
                i--;
            }
        }
    }
}

const removeAt = (arr, index) => {
    if (arr.length) {
        for (let i=index+1; i<arr.length; i++) {
            arr[i-1] = arr[i];
        }
        arr.length = arr.length - 1;
    }
    return arr;
}

let arr = [1,-2,3,-4,-5,6,7,-8,9];
removeNegatives(arr);
console.log(arr);

//Second to Last
const secondToLast = arr => {
    if (arr.length < 2) {
        return null;
    }
    return arr[arr.length-2];
}
console.log(secondToLast([42,true,4,"Kate",7]));
console.log(secondToLast([1]));

//Second Largest Value
const secondLargestValue = arr => {
    if (arr.length < 2) {
        return null;
    }
    let highValue = arr[0];
    let secondHighValue = 0;
    for (let i=1; i<arr.length; i++) {
        if (arr[i] > highValue) {
            secondHighValue = highValue;
            highValue = arr[i];
        } else if (arr[i]>secondHighValue){
            secondHighValue = arr[i]
        }
    }
    return secondHighValue;
}
console.log(secondLargestValue([42,1,4,Math.PI,7]));
console.log(secondLargestValue([1]));

//Nth to last
const nthToLast = (arr, index) => {
    if (!arr.length || index < 0 || index > arr.length) {
        return null;
    }
    return arr[arr.length-index];
}
console.log(nthToLast([5,2,3,6,4,9,7],3));
console.log(nthToLast([5,2,3,6,4,9,7],15));

//Nth Largest
const nthLargestValue = (arr, n) => {
    if (arr.length < n || n < 1) {
        return null;
    }
    // FINISH
}

console.log(nthLargestValue([1,2,3,4],5));

//Skyline Heigths - uses removeAt(arr, index)
const skyLine = arr => {
    if (arr.length) {
        let stopIndex = largestValueIndex(arr);
        arr.length = stopIndex+1;
        for (let i=0; i<arr.length; i++) {
            if (arr[i] < 1) {
                removeAt(arr, i);
                i--;
            } else if (i>0 && arr[i] === arr[i-1]) {
                removeAt(arr, i);
                i--;
            }
        }
        return arr;
    }
    return null;
}
const largestValueIndex = arr => {
    if (arr.length < 1) {
        return null;
    }
    let highValue = 0;
    let highValueIndex = 0;
    for (let i=0; i<arr.length; i++) {
        if (arr[i] > highValue) {
            highValueIndex = i;
            highValue = arr[i];
        }
    }
    return highValueIndex;
}

console.log(skyLine([-1,1,1,7,3]));
console.log(skyLine([0,4]));