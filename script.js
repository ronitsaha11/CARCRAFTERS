const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

form.addEventListener("input", () => {
    validateName();
    validateEmail();
    validatePassword();
});

function validateName() {
    const nameValue = nameInput.value.trim();
    const message = nameInput.nextElementSibling;
    
    if (nameValue.length >= 3) {
        nameInput.className = "success";
        message.textContent = "Looks good!";
        message.className = "valid";
    } else {
        nameInput.className = "error";
        message.textContent = "Name must be at least 3 characters long.";
        message.className = "";
    }
}

function validateEmail() {
    const emailValue = emailInput.value.trim();
    const message = emailInput.nextElementSibling;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (emailPattern.test(emailValue)) {
        emailInput.className = "success";
        message.textContent = "Valid email!";
        message.className = "valid";
    } else {
        emailInput.className = "error";
        message.textContent = "Please enter a valid email address.";
        message.className = "";
    }
}

function validatePassword() {
    const passwordValue = passwordInput.value.trim();
    const message = passwordInput.nextElementSibling;
    
    if (passwordValue.length >= 6) {
        passwordInput.className = "success";
        message.textContent = "Strong password!";
        message.className = "valid";
    } else {
        passwordInput.className = "error";
        message.textContent = "Password must be at least 6 characters long.";
        message.className = "";
    }
}