
function calculate() {
    let weight = document.getElementById("wt").value;
    weight = Number(weight);

    let height = document.getElementById("ht").value;
    height = Number(height);

    let heightM = height / 100;
    let heightSquared = Math.pow(heightM, 2);
    let bmi = weight / heightSquared;
 
    document.getElementById("answer").innerHTML = "BMI: " + bmi.toFixed(2);
    result(bmi);
}
function result(bmi){
    if(bmi<=18)
    {
        document.getElementById("hi").innerHTML="UnderWeight"
    }
    else if(bmi>=18&&bmi<=25)
    {
        document.getElementById("hi").innerHTML="NormalWeight"
    }
    else{
        document.getElementById("hi").innerHTML="OverWeight"
    }
}