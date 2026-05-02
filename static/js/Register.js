function handleRegister(e){
    e.preventDefault();

    let first = document.getElementById("first").value;
    let last = document.getElementById("last").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let msg = document.getElementById("msg");

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let exists = users.find(u => u.email === email);

    if(exists){
        msg.style.display = "block";
        msg.style.background = "rgba(255,77,77,0.1)";
        msg.style.color = "#ff4d4d";
        msg.innerText = "User already exists ❌";
        return;
    }

    // ✅ UPDATED HERE
    users.push({ first, last, email, password, role: "customer" });

    localStorage.setItem("users", JSON.stringify(users));

    msg.style.display = "block";
    msg.style.background = "rgba(34,197,94,0.1)";
    msg.style.color = "#22c55e";
    msg.innerText = "Account created successfully ✅";

    setTimeout(()=>{
        window.location.href = "login.html";
    },1500);
}