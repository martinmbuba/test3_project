const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

function calculateDayOfWeek(day, month, year) {
    if (month <= 2) {
        month += 12;
        year--;
    }

    let K = year % 100;
    let J = Math.floor(year / 100);

    let dayOfWeek = (day + Math.floor(13 * (month + 1) / 5) + K + Math.floor(K / 4) + Math.floor(J / 4) - 2 * J) % 7;
    return dayOfWeek;
}

document.getElementById("birthdayForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const dob = document.getElementById("dob").value;
    const gender = document.getElementById("gender").value;
    const resultDiv = document.getElementById("result");

    if (!dob || !gender) {
        alert("Please enter all fields!");
        return;
    }

    const birthDate = new Date(dob);
    const day = birthDate.getDate();
    const month = birthDate.getMonth() + 1; 
    const year = birthDate.getFullYear();

    if (day < 1 || day > 31 || month < 1 || month > 12) {
        alert("Invalid date or month!");
        return;
    }

    const dayOfWeek = calculateDayOfWeek(day, month, year);

    let name;
    if (gender === "male") {
        name = maleNames[dayOfWeek];
    } else {
        name = femaleNames[dayOfWeek];
    }

    resultDiv.innerHTML = `Your Akan name is: <strong>${name}</strong>`;
});

