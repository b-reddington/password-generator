// Assignment code here
var letterString = "abcdefghijklmnopqrstuvwxyz";
var numberString = "1234567890";
var specialCharString = "!?.,<>@#$%^&*()-=_+";
// Splits the variables above into an array
var letters = letterString.split("");
var numbers = numberString.split("");
var specialChar = specialCharString.split("");

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  var charLimit = prompt("How many characters should your password contain?");
  if (charLimit > 7 && charLimit < 289) {
    var upperConfirm = confirm("Would you like your password to contain uppercase letters? \n Ok for Yes \nCancel for No");
    //Checks if yes to upper case letters, check if user wants numbers in their password.
    if (upperConfirm === true) {
      var numConfirm = confirm("Would you like your password to contain numbers? \n Ok for Yes \nCancel for No");
    }
    else {
      //If user clicks no for uppercase letters, continue to check if user wants numbers in password
      var numConfirm = confirm("Would you like your password to contain numbers? \n Ok for Yes \nCancel for No");
    }
    // if user click yes for numbers, check for special characters
    if (numConfirm === true) {
      var specialConfirm = confirm("Would you like your password to contain special characters? \n Ok for Yes \nCancel for No")
      console.log("process finished");

    }
    // if user checks no for numbers, check for special characters
    else {
      var specialConfirm = confirm("Would you like your password to contain special characters? \n Ok for Yes \nCancel for No")
      console.log("process finished");
    }
  }
  else {
    alert("Password must be at least 8 characters and less than 289.")

  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


