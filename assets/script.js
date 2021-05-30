// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); 

  passwordText.value = password;

}

function generatePassword() {
  var passwordLength = prompt("how long would you like your password? between 8-128 characters.")
  // return Math.floor(Math.random() * 11)

  while(passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Outside boundaries, has to be within 8-128")
  }

  var randomPass = ""
  for(i=0; i<passwordLength; i++){
    randomPass += "a";
  }
  return randomPass
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);