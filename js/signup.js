
const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const existingUser = users.find(function(user) {
        return user.email === email;
    });

    if (existingUser) {
        document.getElementById("message").textContent =
            "Email already registered!";
        return;
    }

    const newUser = {
        name: name,
        email: email,
        password: password
    };

    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));

    document.getElementById("message").textContent =
        "Signup successful! You can now login.";

    signupForm.reset();

});
