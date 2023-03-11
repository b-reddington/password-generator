// Assignment code here
/*
When the generate password is clicked
  * I want a prompt to ask how many characters my password should be
  * I want a prompt to appear that asks if I want special characters in my password
  * then another prompt to ask if I want numbers in my password
  * and a last prompt to ask if I want capital letters
*/
var letterString= "abcdefghijklmnopqrstuvwxyz";
var numberString = "1234567890";
var specialCharString = "!?.,<>@#$%^&*()-=_+";

var letters = letterString.split("");
var numbers = numberString.split("");
var specialChar = specialCharString.split("");

// Tests to confirm that the characters are properly split into an array
// console.log(letters, specialChar, numbers);

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
  var charLimit = prompt("How many characters should your password contain?");

  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


