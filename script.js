// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays for upper & lower case letters, numbers, and special characters that may be included in the randomly generated password
var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

// This empty array will function as the randomly generated password once the function writePassword() is ran
var newPassword = [];

// The writePassword() function will be used to generate the random password
function writePassword() {

  // Clears out the newPassword array in case the function writePassword() was already ran
  newPassword.splice(0, newPassword.length);

  // Asks the user how long the password should be, preferably in numerical form
  var charLength = prompt("How many characters would you like your password to be?");

  // The program checks if the desired length is at least 8 characters
  if (charLength < 8) {
    alert("Password must be at least 8 characters in length.");
  }
  // The program checks if the desired length is no more than 128 characters
  else if (charLength > 128) {
    alert("Password cannot exceed 128 characters in length.");
  }
  /* This else if() statement will prompt the user to choose whether to include upper case letters, 
  lower case letters, numbers, and/or special characters in their passowrd */
  else if (charLength >= 8 && charLength <= 128) {
    var upperAllowed = confirm("Do you want your password to contain upper case letters?");
    var lowerAllowed = confirm("Do you want your password to contain lower case letters?");
    var numAllowed = confirm("Do you want your password to contain numbers?");
    var specialAllowed = confirm("Do you want your password to contain special characters?");
    
    // In case the user does not choose any kind of character type, this alert is ran
    if(upperAllowed, lowerAllowed, numAllowed, specialAllowed == false) {
      alert("Please select at least one character type.");
    }

    // If any of the confirm prompts came back true, this else statement will run
    else {
      
      // This empty array will serve as the source of the allowed character types based on the user's confirmations
      var passwordParameters = [];
      
      /* First, we checks which confirm statements came back as true. Based on what came back true, it would then
      merge the appropriate arrays on lines 5-8 with the empty passwordParameters array. */
      if (upperAllowed) {
        passwordParameters = passwordParameters.concat(upperLetters);
      }
      if (lowerAllowed) {
        passwordParameters = passwordParameters.concat(lowerLetters);
      }
      if (numAllowed) {
        passwordParameters = passwordParameters.concat(numbers);
      }
      if (specialAllowed) {
        passwordParameters = passwordParameters.concat(specialCharacters);
      }
  
      /* A for loop is used in picking any of passwordParameter's newly assigned elements at random. 
      and pushing them up to the newPassword array */
      for (i = 0; i < charLength; i++) {
        newPassword.push(passwordParameters[Math.floor(Math.random() * passwordParameters.length)]);
      }
      
      /* The newPassword array, with it's newly assinged randomly generated elements, is turned into a 
      string using the array method join(). The string is then inserted as text into the tag with the
      ID "password" by utilizing HTML DOM */
      document.getElementById("password").innerHTML = newPassword.join("");
      console.log(newPassword);
    }

  }
  // In case the user inputs a number in letter form, this alert will pop up, asking for a number in numerical form
  else {
    alert("Please write a number in numberical form.");
  }
}

/* The writePassword() function is added to the event listener method. This way, the function is ran 
when the user clicks on the Generate Password button on the site */
generateBtn.addEventListener("click", writePassword);




