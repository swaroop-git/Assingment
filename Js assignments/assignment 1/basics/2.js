var arr= [1,3,2];

var max = arr[0]

for (var i = 0; i<arr.length; i++){
    if (arr[i] >= max){
        max = arr[i]
    }
}

console.log(max);