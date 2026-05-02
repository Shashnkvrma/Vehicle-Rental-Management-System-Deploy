function adminLogin(e){
    e.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let msg = document.getElementById("msg");

    if(email === "admin@vrms.com" && password === "admin123"){
        localStorage.setItem("admin", "true");

        // ✅ FIXED (capital A)
        window.location.href = "Admin.html";

    } else {
        msg.innerText = "Invalid Admin Credentials ❌";
        msg.style.color = "red";
    }
}