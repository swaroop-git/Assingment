function compose(f1, f2) {
    return function (x) {
        return f1(f2(x));
    };
}

function square(x) {
    return x * x;
}

function double(x) {
    return x * 2;
}

var f1 = compose(square, double);
var f2 = compose(double, square);

console.log(f1(5));
console.log(f1(10));
console.log(f2(5));
console.log(f2(10));