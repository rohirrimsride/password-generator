// Assignment code here
// determine a password length (8-128)
// determine password contents, letters Upper and lower case, numbers, spec. chars. 
// 
function generatePassword() {
  // determine password length
  var passwordLength = window.prompt("What length would you like your password? Choose a number between 8 and 128.");
  console.log(passwordLength);
  passwordLength = parseInt(passwordLength);
  while (passwordLength < 8 && passwordLength > 128) {
    window.alert("Please select a number from 8 to 128");
    return (passwordLength);
  }
  for (var i = 0)
  
passwordCharacters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@$%&*-+"];
var passwordCharacters;

}


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
