var newArr = [];
        function map(arr, f) {
            if (arr.length > 0) {
                newArr.push(f(arr[0]));
                map(arr.slice(1), f);
            }
        }

        function square(x) {
            return x * x;
        }

        map([1, 2, 3, 4, 5], square);
        map([1, 4, 9, 16, 25], Math.sqrt);

console.log(newArr);