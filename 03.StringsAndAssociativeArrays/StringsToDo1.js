//Remove Blanks
const removeBlanks = inputString => {
    let retString = ""
    for (let i=0; i<inputString.length; i++) {
        if (inputString[i] != " ") {
            retString += inputString[i];
        }
    }
    return retString;
}
console.log(removeBlanks(" Pl ayTha tF u nkyM usi c "));
console.log(removeBlanks("I can not BELIEVE it's not BUTTER"));

//Get Digits
const getDigits = inputString => {
    let retString = "";
    for (let i=0; i<inputString.length; i++) {
        if (!isNaN(inputString[i])) {
            retString += inputString[i];
        }
    }
    return Number(retString);
}
console.log(getDigits("abc8c0d1ngd0j0!8"));
console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"));

//Acronyms
const acronym = inputString => {
    let retString = "";
    let wordArray = inputString.split(" ");
    for (let i=0; i<wordArray.length; i++) {
        if (wordArray[i]) {
            retString+=wordArray[i][0];
        }
    }
    return retString.toUpperCase();
}
console.log(acronym(" there's no free lunch - gotta pay yer way. "));
console.log(acronym("Live from New York, it's Saturday Night!"));

//Count Non-Spaces
const countNonSpaces = inputString => {
    let spaceCount = 0;
    for (let i=0; i<inputString.length; i++) {
        if (inputString[i] != " ") {
            spaceCount++;
        }
    }
    return spaceCount;
}
console.log(countNonSpaces("Honey pie, you are driving me crazy"));
console.log(countNonSpaces("Hello world !"));

//Remove shorter strings
const removeShorterStrings = (inputArray, lengthCheck) => {
    for (let i=0; i<inputArray.length; i++) {
        if (inputArray[i].length < lengthCheck) {
            inputArray = removeAt(inputArray, i);
            i--;
        }
    }
    return inputArray;
}
const removeAt = (inputArray, index) => {
    for (let i=index+1; i<inputArray.length; i++) {
        inputArray[i-1] = inputArray[i];
    }
    inputArray.length = inputArray.length - 1;
    return inputArray;
}
console.log(removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4) );
console.log(removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3) );