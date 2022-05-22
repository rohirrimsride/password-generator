// Assignment code here
// using this comment type for explaining functions and variables
/* Pseudocode */

var passwordCharactersLetters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"];
var passwordCharactersNumbers = ["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"];
var passwordCharactersSpecial = ["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@$%&*-+"];

var randomItem = function() {

}

function generatePassword() {
  
  passwordLengthHandler();
  // for (var i = 0; i < passwordLength.length; i++) {


  // writePassword();
};

var passwordLengthHandler = function () {
// debugger;
  var passwordLength = window.prompt("What length would you like your password? Choose a number between 8 and 128.");
      console.log(passwordLength);
  
    // checks input, if null return to main screen
    if (passwordLength === null) {
      return generateBtn.addEventListener("click", writePassword);  
    }  // takes input and changes it to integer then compares to parameters 
    passwordLength = parseInt(passwordLength);
    console.log(passwordLength);
    if (passwordLength >= 8 && passwordLength <= 128) {
      /* How do I pass the passwordLength to a selector that will randomly pick the correct number of characters from the passwordCharacters array? */
    passwordTypeHandler();
    } else {  // if password doesn't meet above parameters alert and retry
    window.alert("Please select a number from 8 to 128.");
    // passwordLength();
    return passwordLengthHandler();
  }
};

var passwordTypeHandler = function() {

  // asks to define password criteria, UPPER and lower case letters OR letters and numbers OR letters, numbers and special characters
  // This will determine which array to randomly generate the password from
  var passwordType = window.prompt("What characters would you like your password to contain? Select 1 for UPPER and lower case letters, select 2 for letters AND numbers, select 3 for letters AND numbers AND special characters.")
    console.log(passwordType);

    passwordType = parseInt(passwordType);
    /* Figure out how to pass criteria to actual password generation. */
    // use switch case to select different arrays depending on input
    console.log(passwordType);
    switch (passwordType) {

      case 1: 
          // connects to randomizing function for passwordCharactersLetters
      case 2:
          // connects to randomizing function for passwordCharactersNumbers
      case 3: 
          // connects to randomizing function for passwordCharactersSpecial
      
    
      window.alert("You must Select 1 for UPPER and lower case letters; Select 2 for letters AND numbers; or Select 3 for letters, numbers AND special characters.");
      return passwordTypeHandler();
    }
};

/* DO NOT CHANGE CODE BELOW THIS POINT */

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
