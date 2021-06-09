function find(arr, f) {
    for (var i = 0; i < arr.length; i++) {
        if (f(arr[i])) {
            return arr[i];
        }
    }
}
function isEven(num) {
    return (num % 2 == 0);
}

console.log(isEven(3));
console.log(isEven(4));
console.log(find([1, 3, 5, 4, 2], isEven));