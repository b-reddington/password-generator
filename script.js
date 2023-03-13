// Assignment code here
// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let passwordText = document.querySelector("#password");

  // Create a prompt to get the length of the password
  let size = prompt("How many Characters would you like your password to contain? \nMinimum: 8 \nMaximum: 128");
  if (size < 8 || size > 128) {
    // if password does not meet the requirements, alert an error.
    alert("Error\nLength does not meet the requirements.\nPlease enter a number between 8 and 128.");
  } else {
    // Prompts the user to see if they would like the following characters inside their password
    let lowerCase = confirm("Would you like your password to contain lowercase letters?");
    let upperCase = confirm("Would you like your password to contain uppercase letters?");
    let numbers = confirm("Would you like your password to contain numbers?");
    let special = confirm("Would you like your password to contain symbols?");

    // Stored objects to grab characters from
    let characters = {
      lower: "abcdefghijklmnopqrstuvwxyz",
      upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      numbers: "0123456789",
      special: "!@#$%^&*()_+=-`~?><,./;:'\|[]{}"
    };
    // a variable to store types with boolean = true
    let types = "";
    // If user selects ok on the following prompts, insert type into types variable
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
    // Empty password variable to add random characters in to
    let password = "";
    for (let i = 0; i < size; i++) {
      // Creates a temporary variable to store the selected characters
      let generate = Math.floor(Math.random() * types.length);
      password += types[generate];
    }
    passwordText.textContent = password.trim();
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);