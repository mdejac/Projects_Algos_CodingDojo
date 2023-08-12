const countUp = (end) => {
    if (end < 0) {
        console.log("End number is cannot be negative.");
    } else if (end == 0) {
        console.log(`There are no whole numbers between 0 and ${end}`);
    } else {
        for (let i=0; i<=end; i++) {
            console.log(i);
        }
    }
}

// countUp(10);
// countUp(1);
// countUp(-1);

const mulitplesOfFive = () => {
    let counter = 0;
    for (let i=512; i<=4096; i++) {
        if (i%5 == 0) {
            console.log(i);
            counter++;
        }
    }
    console.log(counter);
}

// mulitplesOfFive();

const doesItMatchMe = (num1, num2) => {
    let testMonth = 2;
    let testDay = 11;
    if ((num1 == testMonth && num2 == testDay) || (num2==testMonth && num1==testDay)) {
        return true;
    }
    return false;
}
console.log (doesItMatchMe(11,2) ? "How did you know?" : "Just another day");

