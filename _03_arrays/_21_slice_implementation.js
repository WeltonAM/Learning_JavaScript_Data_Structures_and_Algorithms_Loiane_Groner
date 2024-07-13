Array.prototype.mySlice = function (begin, end) {
    end = end === undefined ? this.length : end;

    let result = [];

    for (let i = begin; i < end; i++) {
        result.push(this[i]);
    }

    return result;
}

let arr = [1, 2, 3, 4, 5];
let subArray = arr.mySlice(1, 4);

console.log(subArray); // Output: [2, 3, 4]