function calculateBMI(){
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);
    let unit = document.getElementById("unit").value;
    let totalInches = height;

    let bmi;
    let color;

    // Validation
    if(!weight || (unit === "metric" && !height) || (unit === "imperial" && !totalInches)){
        alert("Please enter valid weight and height");
        return;
    }

    // BMI calculation
    if(unit === "metric"){
        bmi = weight / (height * height);
    } 
    else if(unit === "imperial"){
        bmi = (weight * 703) / (totalInches * totalInches);
    }

    bmi = bmi.toFixed(1);

    let category;

    if(bmi < 18.5){
        category = "Underweight";
        color = "blue";
    }
    else if(bmi < 25){
        category = "Normal weight";
        color = "green";
    }
    else if(bmi < 30){
        category = "Overweight";
        color = "orange";
    }
    else{
        category = "Obese";
        color = "red";
    }

    let result = document.getElementById("result");
    result.innerText = "BMI: " + bmi + " (" + category + ")";
    result.style.color = color;
    result.innerText += " - Healthy BMI range: 18.5 to 24.9";
}
