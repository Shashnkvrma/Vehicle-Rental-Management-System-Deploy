function handleLogin(e){
    e.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let errorBox = document.getElementById("error");

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let user = users.find(u => u.email === email && u.password === password);

    if(user){
        // 🔥 FIXED LINE
        localStorage.setItem("currentUser", JSON.stringify(user));

        window.location.href = "vehicle.html";
    } else {
        errorBox.style.display = "block";
        errorBox.innerText = "Invalid email or password ❌";
    }
}