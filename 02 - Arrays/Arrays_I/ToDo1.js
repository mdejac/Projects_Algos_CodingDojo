//Push Front
const pushFront = (list, numberToAdd) => [numberToAdd, ...list];
console.log("Push Front");
console.log("Original list : [5,7,2,3]", "\nNew list : ",pushFront([5,7,2,3],8));
console.log("Original list : [99]", "\nNew list : ",pushFront([99], 7), "\n");

//Pop Front
const popFront = list => {
    let returnNumber = list[0];
    console.log("Original Array : ", list);
    for (let i=1; i<list.length; i++) {
        list[i-1] = list[i];
    }
    list.length = list.length - 1;
    console.log("New Array : ", list);
    return returnNumber;
}
console.log("Pop Front");
console.log("Return Value : ",popFront([0,5,10,15]));
console.log("Return Value : ",popFront([4,5,7,9]), "\n");

//Insert At
const insertAt = (list, index, value) => {
    list.length = list.length + 1;
    for (let i=list.length-1; i>index; i--) {
        list[i] = list[i-1];
    }
    list[index] = value;
    return list;
}
console.log("Insert At")
console.log("Original Array [100,200,5]", "\nInsert Position : 2\nValue : 311\nNew Array : ",insertAt([100,200,5],2,311));
console.log("Original Array [9,33,7]", "\nInsert Position : 1\nValue : 42\nNew Array : ",insertAt([9,33,7],1,42), "\n");

//Remove At
const removeAtChallenge = (list, index) => {
    let returnNumber = list[index];
    console.log("Original Array : ", list);
    for (let i=index+1; i<list.length; i++) {
        list[i-1] = list[i];
    }
    list.length = list.length - 1;
    console.log("New Array : ", list);
    return returnNumber;
}
console.log("Remove At");
console.log("Return Value for index 1:", removeAtChallenge([1000,3,204,77], 1));
console.log("Return Value for index 3:", removeAtChallenge([8,20,55,44,98], 3), "\n");

//Swap Pairs
const swapPairs = list => {
    let stopIndex = list.length % 2 == 0 ? list.length-1 : list.length-2;
    for (let i=0; i<stopIndex; i+=2) {
        let temp = list[i];
        list[i] = list[i+1];
        list[i+1] = temp;
    }
    return list;
}
console.log("Swap Pairs");
console.log("Original Array : [1,2,3,4]\nNew Array : ", swapPairs([1,2,3,4]));
console.log("Original Array : ['Brendan', true, 42]\nNew Array : ", swapPairs(["Brendan", true, 42]), "\n");

//Remove Duplicates
const removeDuplicates = list => {
    let testValue = list[0];
    for (let i=1; i<list.length; i++) {
        if (list[i]==testValue) {
            list = removeAt(list, i);
            i--;
        }
        testValue=list[i];
    }
    return list;
}
const removeAt = (list, index) => {
    for (let i=index+1; i<list.length; i++) {
        list[i-1] = list[i];
    }
    list.length = list.length - 1;
    return list;
}
console.log("Original Array : [-2,-2,3.14,5,5,10]\nNew Array :", removeDuplicates([-2,-2,3.14,5,5,10]));
console.log("Original Array : [9,19,19,19,19,19,29]\nNew Array :", removeDuplicates([9,19,19,19,19,19,29]));