var generateBtn = document.querySelector("#generate");
//Arrays for letters and special characters
var letterArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var specialArray = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '}', '|', '~'];

// Gets a random number between the supplied min and max parameters
var randomNum = function(min, max) {
  var num = Math.floor(Math.random() * (max + 1)) + min;
  return num;
};

// gets a random uppercase character
var getUpper = function() {
  var rand = randomNum(0, 25);
  return letterArray[rand].toUpperCase();
};

// gets a random lowercase character
var getLower = function() {
  var rand = randomNum(0, 25);
  return letterArray[rand];
};

// gets a random number
var getNum = function() {
  return randomNum(0, 9).toString();
};

// gets a random special character
var getSpecial = function() {
  var rand = randomNum(0, specialArray.length - 1);
  return specialArray[rand];
}

var generatePassword = function() {
  var pwdLength = 0; // stores length of password
  var pwdArray = []; // stores characters for password
  while (pwdLength === 0) {
    pwdLength = window.prompt("How long would you like the password to be?");
    // converts string to int if first character is a digit
    pwdLength = parseInt(pwdLength);
    //checks validity of response
    if(!pwdLength || pwdLength < 8 || pwdLength > 128) {
      window.alert("Please choose a valid number between 8 and 128");
      //reset pwdLength if not valid
      pwdLength = 0;
    }
  }

  // Ask user what characters should be used
  var inclUpper = window.confirm("Would you like to include uppercase letters?");
  var inclLower = window.confirm("Would you like to include lowercase letters?");
  var inclNumber = window.confirm("Would you like to include numbers?");
  var inclSpecial = window.confirm("Would you like to include special characters?");

  //add each of the selected character types to ensure at least 1 of each is present
  if (inclUpper) {
    var index = randomNum(0, (pwdLength - 1));
    pwdArray[index] = getUpper();
  }
  if (inclLower) {
    var index = randomNum(0, (pwdLength - 1));
    pwdArray[index] = getLower();
  }
  if (inclNumber) {
    var index = randomNum(0, (pwdLength - 1));
    pwdArray[index] = getNum();
  }
  if (inclSpecial) {
    var index = randomNum(0, (pwdLength - 1));
    pwdArray[index] = getSpecial();
  }

  // fill in the rest of the password with random characters
  for (var i = 0; i < pwdLength; i++) {
    var rand = randomNum(0, 3);
    while (!pwdArray[i]) {

      //randomizes what character goes in each index
      if (rand === 0 && inclUpper) {
        pwdArray[i] = getUpper();
      }
      else if (rand === 1 && inclLower) {
        pwdArray[i] = getLower();
      }
      else if (rand === 2 && inclNumber) {
        pwdArray[i] = getNum();
      }
      else if (rand === 3 && inclSpecial) {
        pwdArray[i] = getSpecial();
      }
      else {
        // re-tries to get an available number if the user does not want the one selected
        rand = randomNum(0, 3);
        
      }

    }
  }
  //converts array to string and returns it
  return pwdArray.join('');
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
