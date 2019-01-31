var readLine =require('readline-sync');

inputString=readLine.question("enter the string ");
letter=readLine.question("enter the letter ");

console.log(letter_count(inputString,letter));

function letter_count(inputString, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < inputString.length; position++) 
 {
    if (inputString.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

