// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {

  var passwordLength = prompt("How long do you want your password to be? Has to be between 8-128 characters.");
  console.log(passwordLength);

  //checks the length of the password
  if(passwordLength > 128) {
    alert("Password length over 128");
    return "";
  }
  else if(passwordLength < 8){
    alert("Password length less than 8");
    return "";
  }
  else if(!Number.isInteger(parseInt(passwordLength))){ // parseInt converts the string into a number
    alert("Enter an integer only");
    return "";
  }

  var upperCase = confirm("Do you want any upper case letters in general?");
  console.log(upperCase);

  var lowerCase = confirm("Do you want any lower case letters in general?");
  console.log(lowerCase);

  var specialCharacters = confirm("Do you want any special characters in general?");
  console.log(specialCharacters);

  var numbers = confirm("Do you want any numbers in general?");
  console.log(numbers);

  //If user says 'no' to everything
  if (!upperCase && !lowerCase && !specialCharacters && !numbers){
    alert("You answered 'no' to everything therefore we cannot generate a password for you.");
    return "";
  }

  //Empty Array
  //Array set to 'let' (instead of const) because it needs to able to change
  let possiblePasswordChars = [];

  // if uppercase is true => add all uppercase letters to possiblePasswordChars
  // upperCase is a boolean so no need to write --> upperCase === true
  if(upperCase){
    possiblePasswordChars = possiblePasswordChars.concat(possiblePasswordChars, ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
    'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']);
  }
  if(lowerCase){
    possiblePasswordChars = possiblePasswordChars.concat(possiblePasswordChars, ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
    'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']);
  }
  if(specialCharacters){
    possiblePasswordChars = possiblePasswordChars.concat(possiblePasswordChars, ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')',
    '-', '+', '=']);
  }
  if(numbers){
    possiblePasswordChars = possiblePasswordChars.concat(possiblePasswordChars, ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']);
  }

  var password = ''; //empty string that will hold the generated password
  for(var i  = 0; i < passwordLength; i++){
    var index = Math.floor(Math.random() * possiblePasswordChars.length);
    var passwordChar = possiblePasswordChars[index];
    password += passwordChar; //adds random character
    console.log(password);
  }

  return password;

}
