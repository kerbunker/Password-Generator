// Assignment Code
var generateBtn = document.querySelector("#generate");
var letterArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var specialArray = []

var randomNum = function(min, max) {
  var num = Math.floor(Math.random() * (max + 1)) + min;
};

var generatePassword = function() {
  var pwdLength = 0;
  while (pwdLength === 0) {
    pwdLength = window.prompt("How long would you like the password to be?");
    //console.log(pwdLength);
    pwdLength = parseInt(pwdLength);
    //console.log(pwdLength);
    if(!pwdLength || pwdLength < 8 || pwdLength > 128) {
      window.alert("Please choose a valid number between 8 and 128");
      //reset pwdLength if not valid
      pwdLength = 0;
    }
  }
  var inclUpper = window.confirm("Would you like to include uppercase letters?");
  var inclLower = window.confirm("Would you like to include lowercase letters?");
  var inclNumber = window.confirm("Would you like to include numbers?");
  var inclSpecial = window.confirm("Would you like to include special characters?");
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
