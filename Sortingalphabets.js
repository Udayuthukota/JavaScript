var readline=require("readline-sync");
var inputString=readline.question("Enter the input string");
    var arr = inputString.split('');
    var tmp;
    for(var i = 0; i < arr.length; i++){
      for(var j = i + 1; j < arr.length; j++){
        if(arr[i] > arr[j]){
          tmp = arr[i];
          arr[i] = arr[j];
          arr[j] = tmp;
        }
      }
    }

    for(var i=0;i<arr.length;i++)
    {
    console.log(arr[i]);
    }