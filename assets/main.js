document.querySelector("#form_button").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".error_message").style.display = "none";

  var form = document.querySelector("#contact_form");

  var name, email, phone, message;

  name = document.querySelector("#name").value.trim();
  email = document.querySelector("#email").value.trim();
  phone = document.querySelector("#phone").value.trim();
  message = document.querySelector("#message").value.trim();

  if (!validateName(name)) {
    return;
  }

  if (!validateEmail(email)) {
    return;
  }

  if (!validatePhone(phone)) {
    return;
  }

  if (!validateMessage(message)) {
    return;
  }

  form.submit();
  form.reset();
});

function validateName(name) {
  if (name === "") {
    showError("Name is required");
    return false;
  }

  return true;
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === "") {
    showError("Email is required");
    return false;
  }

  if (!emailRegex.test(email)) {
    showError("Please enter a valid email");
    return false;
  }

  return true;
}

function validatePhone(phone) {
  const phoneRegex = /^\d{10}$/;

  if (phone === "") {
    showError("Phone number is required");
    return false;
  }

  if (!phoneRegex.test(phone)) {
    showError("Please enter a valid 10-digit phone number");
    return false;
  }

  return true;
}

function validateMessage(message) {
  if (message === "") {
    showError("Message is required");
    return false;
  }

  return true;
}

function showError(errorMessage) {
  var messageBox = document.querySelector(".error_message");
  messageBox.innerHTML = errorMessage;
  messageBox.style.display = "block";
}

var visible = false;

function toggleSideMenu() {
  var sideMenu = document.querySelector(".nav__links");
  var toggleButton = document.getElementById("toggleButton");
  sideMenu.style.display = "flex";

  if (sideMenu.style.transform == ''||sideMenu.style.transform == "translateX(100%)") {
    sideMenu.style.transform = "translateX(0)";
  } else {
    sideMenu.style.transform = "translateX(100%)";
  }
}


