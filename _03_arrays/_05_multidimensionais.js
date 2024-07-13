let averageTemp = [];
averageTemp[0] = [72, 75, 79, 81, 81];
averageTemp[1] = [81, 79, 75, 75, 73];

function printMatrix(myMatrix) {
    if (!Array.isArray(myMatrix)) {
        console.log(myMatrix);
        return;
    }

    for (let i = 0; i < myMatrix.length; i++) {
        printMatrix(myMatrix[i]);
    }
}

printMatrix(averageTemp);
