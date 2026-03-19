function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    // Simple demo login (you can change username/password)
    if (user === "admin" && pass === "1234") {
        window.location.href = "index.html";
    } else {
        document.getElementById("message").innerText = "Invalid Login!";
    }
}