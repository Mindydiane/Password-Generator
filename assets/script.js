// declared top variables & Arrays  
var generateBtn = document.querySelector("#generate");
var combinedArray = []
var characterSelection;
var tempPassword = []

// variables delcared options for password
var numberChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
numberChars = numberChars.join("")
var upperChars = ["A","B","C","D","E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; 
upperChars = upperChars.join("")
var lowerChars = ["a", "b", "c", "d", "e","f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
lowerChars = lowerChars.join("")
var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "?"];
//random character will be selected and will present itself
specialChars = specialChars.join("")

// password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); 

  passwordText.value = password;

}

// start password function
function generatePassword() {
  var passwordLength = prompt("how long would you like your password? between 8-128 characters.")

  if(passwordLength >= 8 || passwordLength <= 128) {
    //passwordLength = alert("Outside boundaries, has to be within 8-128")
    // password length 8-128 characters
        
    //new variables for character selection
    var lowerCharacter = confirm("Do you want lower case?");
    var upperCharacter = confirm("Do you want UPPER CASE?");
    var specialCharacter = confirm("Would you like special characters?");
    var numberCharacter = confirm("Would you like numbers?");
    var temp;

    if (lowerCharacter){
      alert("you chose lower case.")
      // alert pops up "you chose lower case."
      combinedArray.push(lowerChars);
      console.log(combinedArray);
    }
    if (upperCharacter){
      alert("you chose UPPER CASE.")
      // alert pops up "you chose upper case."
      combinedArray.push(upperChars);
      console.log(combinedArray);
   
    }

    if (specialCharacter){
      alert("you chose special characters!")
      combinedArray.push(specialChars)
      // alert pops "you chose special characters!"
      console.log(combinedArray);
     
    }

    if (numberCharacter){
      alert("you chose numbers!")
      combinedArray.push(numberChars)
      // alert pops up "you chose numbers!"
      console.log(combinedArray);
    }
    // to make password length combine with selected characters
    for(var i = 0; i < passwordLength; i++){
      temp = combinedArray.join("");
      
      console.log(temp);
      
      characterSelection = temp[Math.floor(Math.random()*temp.length)]
      console.log(characterSelection);
      tempPassword.push(characterSelection);
      console.log(tempPassword);
    }
    return tempPassword;
  
  }
  else{ 
    window.alert("input is out of range.")
    // if false alert pops up 
  }
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);