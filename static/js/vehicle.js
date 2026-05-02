// 🔥 GLOBAL VARIABLE
let selectedCar = "";

// 🔥 OPEN FORM
function openForm(car){
    selectedCar = car;
    document.getElementById("formBox").style.display = "flex";
}

// 🔥 CLOSE FORM
function closeForm(){
    document.getElementById("formBox").style.display = "none";
}

// 🔥 SAVE BOOKING
function saveBooking(){

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let fromDate = document.getElementById("fromDate").value;
    let toDate = document.getElementById("toDate").value;

    // VALIDATION
    if(!name || !email || !phone || !fromDate || !toDate){
        alert("Fill all fields ❌");
        return;
    }

    // 🔥 CALCULATE DAYS
    let start = new Date(fromDate);
    let end = new Date(toDate);
    let diff = end - start;

    let calculatedDays = diff / (1000 * 60 * 60 * 24);

    if(calculatedDays <= 0){
        alert("Invalid dates ❌");
        return;
    }

    // 🔥 PRICE LOGIC (based on car)
    let price = 0;

    if(selectedCar === "Honda Amaze") price = 1800;
    else if(selectedCar === "Hyundai i20") price = 2000;
    else if(selectedCar === "Grand Vitara") price = 2500;
    else if(selectedCar === "Tata Nano") price = 1200;

    let total = calculatedDays * price;

    // 🔥 GET EXISTING BOOKINGS
    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];

    // 🔥 ADD NEW BOOKING
    bookings.push({
        id: Date.now(),
        name: name,
        email: email,
        phone: phone,
        car: selectedCar,
        days: calculatedDays,
        fromDate: fromDate,
        toDate: toDate,
        totalPrice: total,
        status: "Pending"
    });

    // 🔥 SAVE
    localStorage.setItem("bookings", JSON.stringify(bookings));

    alert(`Booked Successfully ✅\nTotal Price: ₹${total}`);

    // RESET FORM
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("fromDate").value = "";
    document.getElementById("toDate").value = "";

    closeForm();
}