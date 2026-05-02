let currentUser = JSON.parse(localStorage.getItem("currentUser"));

let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
let container = document.getElementById("booking-list");

if (!currentUser) {
    alert("Please login first");
    window.location.href = "login.html";
}

// 🔥 DEBUG (IMPORTANT)
console.log("Current User:", currentUser);
console.log("All Bookings:", bookings);

let myBookings = bookings.filter(b => {
    return (
        b.email === currentUser.email ||
        b.customerEmail === currentUser.email ||
        b.user === currentUser.email
    );
});

console.log("My Bookings:", myBookings);

container.innerHTML = "";

if (myBookings.length === 0) {
    container.innerHTML = `
        <div class="no-bookings">
            <h2>No bookings found 🚗</h2>
            <p>Try booking a vehicle first</p>
        </div>
    `;
} else {
    myBookings.forEach((b, index) => {
        container.innerHTML += `
        <div class="card">
            <div class="row">

                <div class="col">
                    <div class="label">Booking ID</div>
                    <div class="value">${index + 1}</div>
                </div>

                <div class="col">
                    <div class="label">Car</div>
                    <div class="value">${b.car || "Not available"}</div>
                </div>

                <div class="col">
                    <div class="label">From Date</div>
                    <div class="value">${b.fromDate || "Not available"}</div>
                </div>

                <div class="col">
                    <div class="label">To Date</div>
                    <div class="value">${b.toDate || "Not available"}</div>
                </div>

                 <div class="col">
                    <div class="label">Days</div>
                    <div class="value">${b.days || "Not available"}</div>
                </div>

                

                <div class="col">
                    <div class="label">Total Price</div>
                    <div class="value">${b.totalPrice || "Pending"}</div>
                </div>



            </div>
        </div>
        `;
    });
}