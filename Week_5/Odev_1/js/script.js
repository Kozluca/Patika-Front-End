// KARŞILAMA
let fullName = prompt("Please enter your name")
let myName = document.querySelector("#myName")

// KARŞILAMA IF
if (!fullName) {
    fullName = "Visitor";
}

myName.textContent = `${fullName}`;

// SAAT 
function showTime() {
    let clockTime = new Date();
    let hours = clockTime.getHours().toString().padStart(2, "0");
    let minutes = clockTime.getMinutes().toString().padStart(2, "0");
    let seconds = clockTime.getSeconds().toString().padStart(2, "0");
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let dayName = days[clockTime.getDay()];

    document.getElementById("myClock").textContent = `${hours}:${minutes}:${seconds} - ${dayName}`;
    setTimeout(showTime, 1000)
}

showTime();