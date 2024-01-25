
function Redirect() {
  location.replace("loginPage.html");
}

function GoToLogin() {
  location.replace("index.html");
}


function checkLoginDetails() {
  let inputEmail = document.getElementById("emailAddress").value;
  let inputPassword = document.getElementById("password").value;

  console.log("email", inputEmail);
  console.log("password", inputPassword);

  let correctEmail = "test";
  let correctPassword = "1";

  if (inputEmail === correctEmail && inputPassword === correctPassword) {
    Redirect();
  } else {
    console.log("Error - incorrect password or email");
   
  }
}
