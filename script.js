// Assignment code here
var charLower = 'abcdefghijklmnopqrstuvwxyz';
var charUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var charNum = '1234567890';
var charSym = '!@#$%^&*()';

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
//  todo THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
//  todo THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// todo THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
//  todo THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
//  todo THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// todo THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// todo THEN the password is either displayed in an alert or written to the page
