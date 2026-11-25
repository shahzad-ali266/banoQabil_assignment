
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const loggedInUser = users.find(function(user) {
        return user.email === email && user.password === password;
    });

    if (loggedInUser) {

        localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));

        window.location.href = "dashboard.html";

    } else {

        document.getElementById("message").textContent =
            "Invalid email or password!";

    }

});
