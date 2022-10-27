// Random Password Using JavaScript Code:

var Password = document.getElementById("password");

// function that generate random characteristc
function genPassword() {
  var char =
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var passwordLength = 15;
  var password = "";
  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * char.length);
    password += char.substring(randomNumber, randomNumber + 1);
  }
  document.getElementById("password").value = password;
}

// function that copy the password from the text input
function copyPassword() {
  var CopyText = document.getElementById("password");
  CopyText.select();
  document.execCommand("copy");
}
