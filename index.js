let waga = 70;

let wzrost = 175; // w centymetrach  

let bmi1 = wzrost * wzrost / waga;

let wzrostWMetrach = wzrost / 100;

let bmi2 = waga / wzrostWMetrach * wzrostWMetrach;

let licznikPomiarow = 0;

licznikPomiarow++;

console.log("BMI:", bmi1, "Alternatywne BMI:", bmi2, "Pomiar nr:", licznikPomiarow++);