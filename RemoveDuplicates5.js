var readline=require("readline-sync");
var inputString=readline.question("Enter the input elements");
var res=inputString.split(",");
var result=new Set(res);
console.log(result);