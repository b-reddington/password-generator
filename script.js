// if symbols, numbers, and/or capital letters are needed
// alert, prompt, confirm

// Assignment code here
var letterString = "abcdefghijklmnopqrstuvwxyz";
var numberString = "1234567890";
var specialCharString = "!?.,<>@#$%^&*()-=_+";
// Splits the variables above into an array
var letters = letterString.split("");
var numbers = numberString.split("");
var specialChar = specialCharString.split("");
var password = "";
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


