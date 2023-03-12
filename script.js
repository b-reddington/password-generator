// if symbols, numbers, and/or capital letters are needed
// alert, prompt, confirm

// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  var characters = {
    lower: "abcdefghijklmnopqrstuvwxyz",
    upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    special: "!@#$%^&*()_+=-`~?><,./;:'\|[] {}"
  };
  // Create a prompt to get the length of the password
  var passLength = prompt("How many Characters would you like your password to contain? \nMinimum: 8 \nMaximum: 128");
  var password = "";
  var lowerCase = function () {
    for (let i = 0; i < passLength; i++) {
      password += characters.lower.charAt(Math.floor(Math.random() * characters.lower.length)) 
    }
    return password.trim();
  }

  passwordText.textContent = lowerCase();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);