// Assignment code here
var charLower = 'abcdefghijklmnopqrstuvwxyz';
var charUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var charNum = '1234567890';
var charSym = '!@#$%^&*()';

var passHolder = '';
var newPassword = '';

window.alert(
  'Welcome to the Password Generator! you will be given a few prompts, to determine the characters used in your password. Pleasae answer all of the questions. OK=yes, CACNEL=no'
);
function generatePassword() {
  passHolder = '';
  newPassword = '';
  console.log(passHolder);
  console.log(newPassword);
  console.log('beginning');
  var promptLength = window.prompt(
    'First choose the length of your password! It must be at least 8 characters, but no more than 128'
  );
  if (promptLength < 8 || promptLength > 128) {
    window.alert(
      'must be at least 8 characters, and no more than 128 characters'
    );
    console.log(promptLength);
  } else {
    var promptLower = window.confirm(
      'Do you want your password to conain Lowercase letters?'
    );
    if (promptLower) {
      passHolder += charLower;
      console.log(passHolder);
    }

    var promptUpper = window.confirm(
      'Do you want your password to conain Uppercase letters?'
    );
    if (promptUpper) {
      passHolder += charUpper;
      console.log(passHolder);
    }
    var promptNum = window.confirm(
      'Do you want your password to conain Numbers?'
    );
    if (promptNum) {
      passHolder += charNum;
      console.log(passHolder);
    }

    var promptSym = window.confirm(
      'Do you want your password to conain Symbols?'
    );
    if (promptSym) {
      passHolder += charSym;
      console.log(passHolder);
    }
  }
  if (!promptLower && !promptNum && !promptSym && !promptUpper) {
    window.alert(
      'YOU MUST PICK AT LEAST ONE CRITERIA! PLEASE CLICK THE BUTTON, AND START OVER!!'
    );
  } else {
    for (var i = 0; i < promptLength; i++) {
      newPassword += passHolder.charAt(
        Math.floor(Math.random() * passHolder.length)
      );
    }
    console.log(newPassword);
    return newPassword;
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var newPassword = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = newPassword;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
//  * THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
//  *THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// * THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
//  * THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
//  * THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// * THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// * THEN the password is either displayed in an alert or written to the page
