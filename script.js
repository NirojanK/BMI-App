function calculateBMI(){
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let unit = document.getElementById("unit").value;

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
    }
    else if(bmi < 25){
        category = "Normal weight";
    }
    else if(bmi < 30){
        category = "Overweight";
    }
    else{
        category = "Obese";
    }

    document.getElementById("result").innerText = "BMI: " +bmi + " (" + category + ")";
}