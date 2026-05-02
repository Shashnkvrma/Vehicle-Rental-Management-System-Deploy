if (!localStorage.getItem("admin")) {
    window.location.href = "Admin-login.html";
}

let vehicles = JSON.parse(localStorage.getItem("vehicles")) || [];

function addVehicle(e){
    e.preventDefault();

    let name = document.getElementById("name").value;
    let type = document.getElementById("type").value;
    let price = document.getElementById("price").value;

    vehicles.push({
        id: Date.now(),
        name,
        type,
        price
    });

    localStorage.setItem("vehicles", JSON.stringify(vehicles));
    displayVehicles();
    e.target.reset();
}

function displayVehicles(){
    let table = document.getElementById("vehicleTable");
    table.innerHTML = "";

    vehicles.forEach(v => {
        table.innerHTML += `
            <tr>
                <td>${v.name}</td>
                <td>${v.type}</td>
                <td>₹${v.price}</td>
                <td>
                    <button onclick="editVehicle(${v.id})">Edit</button>
                    <button class="delete-btn" onclick="deleteVehicle(${v.id})">Delete</button>
                </td>
            </tr>
        `;
    });
}

function deleteVehicle(id){
    vehicles = vehicles.filter(v => v.id !== id);
    localStorage.setItem("vehicles", JSON.stringify(vehicles));
    displayVehicles();
}

function editVehicle(id){
    let vehicle = vehicles.find(v => v.id === id);

    let newName = prompt("Enter new name:", vehicle.name);
    let newType = prompt("Enter new type:", vehicle.type);
    let newPrice = prompt("Enter new price:", vehicle.price);

    if(newName && newType && newPrice){
        vehicle.name = newName;
        vehicle.type = newType;
        vehicle.price = newPrice;

        localStorage.setItem("vehicles", JSON.stringify(vehicles));
        displayVehicles();
    }
}

function displayBookings(){
    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    let table = document.getElementById("bookingTable");

    table.innerHTML = "";

    if(bookings.length === 0){
        table.innerHTML = `
            <tr>
                <td colspan="8">No bookings yet</td>
            </tr>
        `;
        return;
    }

    bookings.forEach((b, index) => {
        table.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${b.name || "Not available"}</td>
                <td>${b.email || "Not available"}</td>
                <td>${b.phone || "Not available"}</td>
                <td>${b.car || "Not available"}</td>
                <td>${b.fromDate || "Not available"}</td>
                <td>${b.toDate || "Not available"}</td>
                <td>${b.days || "Not available"}</td>
                <td>${b.totalPrice || "Not available"}</td>
                


            </tr>
        `;
    });
}

displayVehicles();
displayBookings();