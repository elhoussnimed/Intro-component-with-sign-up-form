const fName = document.querySelector("#fName");
const lName = document.querySelector("#lName");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const btn = document.querySelector(".inputFields button");

// Check First Name
function checkFirstName() {
  const fNameErrorMsg = document.querySelector(".fname p");
  const fNameErrorIcon = document.querySelector(".fname img");
  if (fName.value.length === 0) {
    fName.style.cssText = "border: 2px solid red";
    fNameErrorMsg.style.display = "block";
    fNameErrorIcon.style.display = "block";
  } else {
    fNameErrorMsg.style.display = "none";
    fNameErrorIcon.style.display = "none";
    fName.style.cssText = "border: 2px solid hsl(154, 59%, 51%)";
  }
}
// Check Last Name
function checkLastName() {
  const lNameErrorMsg = document.querySelector(".lname p");
  const lNameErrorIcon = document.querySelector(".lname img");
  if (lName.value.length === 0) {
    lName.style.cssText = "border: 2px solid red";
    lNameErrorMsg.style.display = "block";
    lNameErrorIcon.style.display = "block";
  } else {
    lNameErrorMsg.style.display = "none";
    lNameErrorIcon.style.display = "none";
    lName.style.cssText = "border: 2px solid hsl(154, 59%, 51%)";
  }
}
// Check Email
function checkEmail() {
  const regEx = /[\w\-]+@\w+\.[A-Za-z]+/gi;
  const emailErrorMsg = document.querySelector(".email p");
  const emailErrorIcon = document.querySelector(".email img");
  if (regEx.test(email.value) === false || email.value.length === 0) {
    email.style.cssText = "border: 2px solid red";
    emailErrorMsg.style.display = "block";
    emailErrorIcon.style.display = "block";
  } else {
    emailErrorMsg.style.display = "none";
    emailErrorIcon.style.display = "none";
    email.style.cssText = "border: 2px solid hsl(154, 59%, 51%)";
  }
}
// Check Password
function checkPassword() {
  const passwordErrorMsg = document.querySelector(".password p");
  const passwordErrorIcon = document.querySelector(".password img");
  if (password.value.length === 0) {
    password.style.cssText = "border: 2px solid red";
    passwordErrorMsg.style.display = "block";
    passwordErrorIcon.style.display = "block";
  } else {
    passwordErrorMsg.style.display = "none";
    passwordErrorIcon.style.display = "none";
    password.style.cssText = "border: 2px solid hsl(154, 59%, 51%)";
  }
}

btn.addEventListener("click", checkFirstName);
btn.addEventListener("click", checkLastName);
btn.addEventListener("click", checkEmail);
btn.addEventListener("click", checkPassword);
