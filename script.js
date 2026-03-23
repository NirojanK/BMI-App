function calculateBMI() {
    console.log("calculateBMI is running");
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);
    let unit = document.getElementById("unit").value;

    let bmi;
    let color;

    // Get imperial values ONLY when needed
    let feet = parseFloat(document.getElementById("feet").value) || 0;
    let inches = parseFloat(document.getElementById("inches").value) || 0;
    let totalInches = (feet * 12) + inches;

    // Validation
    if (isNaN(weight) || 
   (unit === "metric" && isNaN(height)) || 
   (unit === "imperial" && totalInches === 0)) {
    alert("Please enter valid weight and height");
    return;
    }

    // Calculate BMI
    if (unit === "metric") {
        bmi = weight / (height * height);
    } else {
        bmi = (weight * 703) / (totalInches * totalInches);
    }

    // 🚨 Safety check
    if (bmi === undefined || isNaN(bmi)) {
        alert("Error calculating BMI");
        return;
    }

    let bmiDisplay = bmi.toFixed(1);

    let category;

    if (bmi < 18.5) {
        category = "Underweight";
        color = "blue";
    } else if (bmi < 25) {
        category = "Normal weight";
        color = "green";
    } else if (bmi < 30) {
        category = "Overweight";
        color = "orange";
    } else {
        category = "Obese";
        color = "red";
    }

    let result = document.getElementById("result");
    console.log(result);
    result.innerText = `BMI: ${bmiDisplay} (${category})`;
    result.style.color = color;
    result.classList.add("show");
}

