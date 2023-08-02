let arr = [4,2,1,3,5];

const minToFront = arr => {
    if (arr.length) {
        let lowValueIndex = 0;
        for (let i=1; i<arr.length; i++) {
            if (arr[lowValueIndex] > arr[i]) {
                lowValueIndex = i;
            }
        }
        let lowValue = arr[lowValueIndex];
        for (let i=lowValueIndex; i>0; i--) {
            arr[i] = arr[i-1];
        }
        arr[0] = lowValue;
    }
}

minToFront(arr);
console.log(arr);