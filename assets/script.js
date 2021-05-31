// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var combinedArray = []
var characterSelection;
var tempPassword = []

// variables for
var numberChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
numberChars = numberChars.join("")
var upperChars = ["A","B","C","D","E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; 
upperChars = upperChars.join("")
var lowerChars = ["a", "b", "c", "d", "e","f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
lowerChars = lowerChars.join("")
var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "?"];
specialChars = specialChars.join("")

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); 

  passwordText.value = password;

}


function generatePassword() {
  var passwordLength = prompt("how long would you like your password? between 8-128 characters.")
  
  if(passwordLength >= 8 || passwordLength <= 128) {
  // passwordLength = alert("Outside boundaries, has to be within 8-128")
  
 
    var lowerCharacter = confirm("Do you want lower case?");
    var upperCharacter = confirm("Do you want UPPER CASE?");
    var specialCharacter = confirm("Would you like special characters?");
    var numberCharacter = confirm("Would you like numbers?");
    var temp;

    if (lowerCharacter){
      alert("you chose lower case.")
      // combinedArray = [].concat(lowerChars)
      combinedArray.push(lowerChars);
      console.log(combinedArray);
    }
    if (upperCharacter){
      alert("you chose upper case.")
      // combinedArray = [].concat(upperChars)
      combinedArray.push(upperChars);
      console.log(combinedArray);
   
    }

    if (specialCharacter){
      alert("you chose special characters.")
      combinedArray.push(specialChars)
      // combinedArray.push(specialChars)
      console.log(combinedArray);
      // console.log(combinedArray.join(""));
    }

    if (numberCharacter){
      alert("you chose numbers!")
      combinedArray.push(numberChars)
      // combinedArray.push(numberChars)
      console.log(combinedArray);
    }
    //elerate 
    for(var i = 0; i < passwordLength; i++){
      temp = combinedArray.join("");
      
      console.log(temp);
      // console.log(combinedArray + 'final array');
      // temp=combinedArray.replace(/,/g , " ");
      // combinedArray=temp.replace("")
      // console.log(combinedArray);
      characterSelection = temp[Math.floor(Math.random()*temp.length)]
      console.log(characterSelection);
      tempPassword.push(characterSelection);
      // tempPassword = characterSelection.join("");
      console.log(tempPassword);
    }
    return tempPassword;
  
  }
  else{
    window.alert("input is out of range.")
  }
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);