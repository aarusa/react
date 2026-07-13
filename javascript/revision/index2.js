// Check if a number is even or odd.
var num = 3;
if (num % 2 == 0){
    // console.log("Even");
} else {
    // console.log("Odd")
};

// Convert Celsius to Fahrenheit.
var temp = 5;
var fah = (temp * 2) + 30;
// console.log(`
//     Celsius: ${temp}'C
//     Fahrenheit: ${fah}'F
//     `);

// Calculate BMI using function
// weight in kg, height in m
function calculateBMI(weightInKg, feet, inches) {
    const totalInches = (feet * 12) + inches;
    // convert inches to meters
    const heightInMeters = totalInches * 0.0254;
    // calculate bmi
    const bmi = weightInKg / (heightInMeters ** 2);

    return bmi.toFixed(1);
}

const bmi = calculateBMI(65, 4, 11);

let category = "";

if (bmi < 18.5) {
    category = "Underweight";
} else if (bmi < 25) {
    category = "Healthy Weight";
} else if (bmi < 30) {
    category = "Overweight";
} else {
    category = "Obesity";
}

// console.log(`Your BMI is ${bmi} and you have ${category}.`);

// Find the largest of three numbers.
const a = 5;
const b = 5;
const c = 6;
let largest;

if(a >= b && a >= c) {
    largest = a;
} else if(b >=a && b >= c){
    largest = b;
} else{
    largest = c;
}

// console.log(`Largest: ${largest}`)

// Count vowels in a string
const countVowels = str => Array.from(str.toLowerCase()).filter(letter => 'aeiou'.includes(letter)).length;


console.log(countVowels("A hippopotamus"));