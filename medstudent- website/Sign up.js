const username = document.getElementById("newUser");
const password = document.getElementById("newPass");
const button = document.getElementById("createBtn");

function checkInputs() {
    if(username.value.trim() !== "" && password.value.trim() !== "") {
        button.disabled = false;  // Button active
    } else {
        button.disabled = true;   // Button inactive
    }
}

// Input event listeners
username.addEventListener("input", checkInputs);
password.addEventListener("input", checkInputs);

button.addEventListener("click", function() {
    localStorage.setItem("username", username.value);
    localStorage.setItem("password", password.value);
    alert("Account Created!");
});