var readline = require('readline-sync');
var input1 = readline.question("Enter first input");
var input2 = readline.question("Enter secong input");
var inputArray1 = input1.split(",");
var inputArray2 = input2.split(",");
var arr = [];
var diff = [];
for (var i = 0; i < inputArray1.length; i++) {
    arr[inputArray1[i]] = true;
}

for (var j = 0; j < inputArray2.length; j++) {
    if (arr[inputArray2[j]]) {
        delete arr[inputArray2[j]];
    }
    else {
        arr[inputArray2[j]] = true;
    }
}
for (var k in arr) {
    diff.push(k);
    console.log(k);
}





