
const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

if (!loggedInUser) {

    window.location.href = "login.html";

} else {

    document.getElementById("welcome").textContent =
        "Welcome, " + loggedInUser.name;

}

document.getElementById("logoutBtn").addEventListener("click", function() {

    localStorage.removeItem("loggedInUser");

    window.location.href = "login.html";

});
