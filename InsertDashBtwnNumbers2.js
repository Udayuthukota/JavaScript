var readline = require('readline-sync');
var name = readline.question("enter number");
var temp;
var flag = 0;
var result = 0;
var len = name.length;
for (var i = 0; i < name.length - 1; i++) {
    if (name[i] % 2 == 0 && name[i + 1] % 2 == 0) {
        var firstString = name.substring(0, i + 1);
        var secondString = name.substring(i + 1);
        name = firstString + "-" + secondString;
    }
}
console.log(name);

