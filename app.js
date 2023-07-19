"use strict";

const btnSubscribe = document.querySelector(".btn");
const emailEl = document.querySelector(".input-box");
const emailErr = document.querySelector(".email-err");
const successContainer = document.querySelector(".sucess-container");
const containerEl = document.querySelector(".container");
const dismissBtn = document.querySelector(".dismiss-btn");
const inLineEmail = document.querySelector(".inline-email");
function isValidEmail(email) {
  // Regular expression to validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Test the email against the regex
  return emailRegex.test(email);
}

btnSubscribe.addEventListener("click", function (e) {
  e.preventDefault();

  const isEmail = isValidEmail(emailEl.value);

  if (isEmail) {
    console.log("success");
    successContainer.classList.remove("hidden");
    containerEl.classList.add("hidden");
    inLineEmail.innerText = emailEl.value;
  } else {
    emailErr.classList.remove("hidden");
    emailEl.classList.add("error-style");
    btnSubscribe.classList.add("clicked");
  }
});
dismissBtn.addEventListener("click", function () {
  successContainer.classList.add("hidden");
  containerEl.classList.remove("hidden");
  emailEl.value = "";
  emailErr.classList.add("hidden");
  emailEl.classList.remove("error-style");
});
