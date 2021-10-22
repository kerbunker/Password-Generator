// Assignment Code
var generateBtn = document.querySelector("#generate");
var letterArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var specialArray = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '}', '|', '~'];


var randomNum = function(min, max) {
  var num = Math.floor(Math.random() * (max + 1)) + min;
  return num;
};

var getUpper = function() {
  var rand = randomNum(0, 25);
  return letterArray[rand].toUpperCase();
};

var getLower = function() {
  var rand = randomNum(0, 25);
  return letterArray[rand];
};

var getNum = function() {
  return randomNum(0, 9).toString();
};

var getSpecial = function() {
  var rand = randomNum(0, specialArray.length - 1);
  return specialArray[rand];
}

var generatePassword = function() {
  var pwdLength = 0;
  var pwdArray = [];
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

  //add each of the selected character types
  if (inclUpper) {
    var index = randomNum(0, (pwdLength - 1));
    pwdArray[index] = getUpper();
  }
  if (inclLower) {
    var index = randomNum(0, (pwdLength - 1));
    pwdLength[index] = getLower();
  }
  if (inclNumber) {
    var index = randomNum(0, (pwdLength - 1));
    pwdLength[index] = getNum();
  }
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
