// Assignment code here
// using this comment type for explaining functions and variables
/* Pseudocode to work through issues */

var passwordCharactersLetters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz".split("");
var passwordCharactersNumbers = "9AaB8bCc0DdE7eF5f1GgH6hIi2JjK9kLl3MmN0nOo4PpQ1qRr5SsT2tUu6VvW3wXx7Yy4Zz8".split("");
var passwordCharactersSpecial = "9A!aB8bCc@0D(dE7$eF5%f1Gg)&H6h*Ii2J_jK9k-Ll3+MmN!0nO@o4P$pQ%1qR&r5S*sT2_tUu6-VvW+3wXx7Y(y4Z)z8".split("");

function generatePassword(passwordLength, passwordType) {
  //debugger;
// if 1 selected - upper and lower case letters
  if (passwordType === 1) {
    //debugger;
    for (var i = 0; i < passwordLength; i++) {

      randomIndex = (Math.floor(Math.random() * passwordCharactersLetters.length));
      console.log(randomIndex);
      
      var password = passwordCharactersLetters[randomIndex]
      console.log(password);
      window.alert("Your password is: " + password)
    }
    writePassword(password);
  }
// if 2 selected - letters and numbers
  if (passwordType === 2) {
    for (var i = 0; i < passwordLength; i++) {

      randomIndex = (Math.floor(Math.random() * passwordCharactersNumbers.length));
      console.log(randomIndex);
      
      var password = passwordCharactersNumbers[randomIndex]
      console.log(password);
      window.alert("Your password is: " + password)
    }
    writePassword(password);   
  }
// if 3 selected - letters, numbers and special characters
  if (passwordType === 3) {
    // debugger;
    var password = "";
    for (var i = 0; i < passwordLength; i++) {

      randomIndex = (Math.floor(Math.random() * passwordCharactersSpecial.length));
      console.log(randomIndex);

      var password = passwordCharactersSpecial[randomIndex]
      console.log(password);
      window.alert("Your password is: " + password)
    }
    writePassword(password);
  }
};

function passwordCriteriaHandler() {
//debugger;
  // determine length of the password
  passwordLength = window.prompt("What length would you like your password? Choose a number between 8 and 128.");
    // checks input, if null return to main screen
    if (passwordLength === null) {
      return generateBtn.addEventListener("click", passwordCriteriaHandler);  
    }  
    
    // takes input and changes it to integer then compares to parameters in the if statement
    passwordLength = parseInt(passwordLength);
    if (passwordLength <= 7 || passwordLength >= 129){  // if password is outside parameters alert and retry
      window.alert("Please select a number from 8 to 128.");
      passwordCriteriaHandler();
    }
  // determine what characters to include
  passwordType = window.prompt("What characters would you like your password to contain? Select 1 for UPPER and lower case letters, select 2 for letters AND numbers, select 3 for letters AND numbers AND special characters.")
    passwordType = parseInt(passwordType);
    //if passwordType is equal to 1,2 or 3 pass to generatePassword with arguments
    if (passwordType === 1 || passwordType === 2 || passwordType === 3) {
      generatePassword(passwordLength, passwordType);
    } else {//restarts password criteria selection
      window.alert("You must Select 1 for UPPER AND lower case letters;  Select 2 for letters AND numbers;  or Select 3 for letters AND numbers AND special characters.");
      passwordCriteriaHandler();
    }
};

/* DO NOT CHANGE CODE BELOW THIS POINT */

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
/*function writePassword(password) {

  //var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};*/

// Add event listener to generate button
generateBtn.addEventListener("click", passwordCriteriaHandler);
