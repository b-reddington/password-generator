// alert, prompt, confirm
// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");

  // Create a prompt to get the length of the password
  var passLength = prompt("How many Characters would you like your password to contain? \nMinimum: 8 \nMaximum: 128");
  var lowerCase = confirm("Would you like your password to contain lowercase letters?");
  var upperCase = confirm("Would you like your password to contain uppercase letters?");
  var number = confirm("Would you like your password to contain numbers?");
  var symbols = confirm("Would you like your password to contain symbols?");
  var characters = {
    lower: "abcdefghijklmnopqrstuvwxyz",
    upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    special: "!@#$%^&*()_+=-`~?><,./;:'\|[] {}"
  };
  var types = "";

  if (lowerCase) {
    types += characters.lower;
  }
  if (upperCase) {
    types += characters.upper;
  }
  if (numbers) {
    types += characters.numbers;
  }
  if (special) {
    types += characters.special;
  }
  }


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);