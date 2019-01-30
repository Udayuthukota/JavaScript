var readline=require('readline-sync');
var inputString=readline.question("enter the string");
 var result=inputString.split(',');
 console.log(result.sort());
 console.log(result.reverse());
