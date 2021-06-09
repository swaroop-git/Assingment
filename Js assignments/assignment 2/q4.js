function map(arr, f) {
    var outArr = [];
    for (var i = 0; i < arr.length; i++) {
        outArr[i] = f(arr[i]);
    }
    return outArr;
}

function square(x) {
    return x * x;
}

console.log(map([1, 2, 3, 4, 5], square));
console.log(map([1, 4, 9, 16, 25], Math.sqrt));