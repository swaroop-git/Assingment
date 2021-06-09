function find(arr, f) {
    if (arr.length > 0) {
        if (f(arr[0])) {
            return arr[0]
        }
        return find(arr.slice(1), f);
    }
  }
  
  function isEven(num) {
    return (num % 2 == 0);
  }
  
  console.log(isEven(3));
  console.log(isEven(4));
  console.log(find([1, 3, 5, 4, 2], isEven));