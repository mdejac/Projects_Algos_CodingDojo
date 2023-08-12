const rSigma = num => {
    num = parseInt(num);
    if (num < 1) {
        return 0;
    }
    if (num == 1) {
        return 1
    }
    return num+rSigma(num-1);
}

// console.log(rSigma(5));
// console.log(rSigma(2.5));
// console.log(rSigma(-1));

const rFactorial = num => {
    num = parseInt(num);
    if (num <= 1) {
        return 1;
    }
    return num*rFactorial(num-1);
}

// console.log(rFactorial(3));
// console.log(rFactorial(6.5));
// console.log(rFactorial(0));
// console.log(rFactorial(-3));

const floodFill = (canvas, startXY, newColor) => {
    let x = startXY[0];
    let y = startXY[1];
    let origColor = canvas[x][y];
    canvas[x][y] = newColor;
    
    //Check left
    if (y!=0 && canvas[x][y-1] == origColor) {
        floodFill(canvas, [x, y-1], newColor);
    }
    //Check right
    if (y<canvas[x].length-1 && canvas[x][y+1] == origColor) {
        floodFill(canvas, [x, y+1], newColor);
    }
    //Check up
    if (x!=0 && canvas[x-1][y] == origColor) {
        floodFill(canvas, [x-1, y], newColor);
    }
    //Check down
    if (x < canvas.length-1 && canvas[x+1][y] == origColor) {
        floodFill(canvas, [x+1, y], newColor);
    }
}

const floodFill2 = (canvas, startXY, newColor) => {
    const origColor = canvas[startXY[0]][startXY[1]];
    fill(canvas, startXY, newColor);

    //Set adjacent positions
    const neighbors = [[-1,0],[0,-1],[1,0],[0,1]];

    for (const [dx, dy] of neighbors) {
        let neighborX = startXY[0] + dx;
        let neighborY = startXY[1] + dy;
    
        if (isValidXY(canvas, [neighborX, neighborY]) && canvas[neighborX][neighborY] == origColor) {
            floodFill2(canvas, [neighborX,neighborY], newColor);
        }
    }
}

const isValidXY = (canvas, testXY) => testXY[0]>=0 && testXY[1]>=0 && testXY[0]<canvas.length && testXY[1]<canvas[testXY[0]].length;

const fill = (canvas, fillXY, newColor) => {
    if (isValidXY(canvas,fillXY)) {
        canvas[fillXY[0]][fillXY[1]] = newColor;
    }
}

let origCanvas = 
    [[3,2,3,4,3],
     [2,3,3,4,0],
     [7,3,3,5,3],
     [6,5,3,4,1],
     [1,2,3,3,3]];

console.log(origCanvas);
floodFill2(origCanvas, [2,2], 1);
console.log(origCanvas);
