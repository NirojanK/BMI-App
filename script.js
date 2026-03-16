function calculateBMI(){
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let unit = document.getElementById("unit").value;

    let feet = parseInt(document.getElementById("feet").value);
    let inches = parseInt(document.getElementById("inches").value);

let totalInches = (feet * 12) + inches;

    if(unit === "metric"){
        bmi = weight / (height *height);
    }
    if(unit ==="imperial"){
        bmi = (weight * 703) / (height * height);
    }

    bmi = bmi.toFixed(1);

    let category;

    if(bmi < 18.5){
        category = "Underweight";
        color = blue;
    }
    else if(bmi < 25){
        category = "Normal weight";
        color = green;
    }
    else if(bmi < 30){
        category = "Overweight";
        color = orange;
    }
    else{
        category = "Obese";
        color = red;
    }

    document.getElementById("result").innerText = "BMI: " +bmi + " (" + category + ")";
    result.innerText = "BMI: " +bmi+ " (" + category + ")";
    result.style.color = color;
    
}
