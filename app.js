let age = 32;
let userName = "Max";
let hobbies = ["Sports", "Cooking", "Reading"];
let job = {
  title: "Developer",
  place: "New york",
  salary: "50000",
};

let totalAdultYears;
function calculateAdultYears(userAge) {
    return userAge - 18;
}


totalAdultYears = calculateAdultYears(age);
console.log(totalAdultYears);
 
age = 45;
totalAdultYears = calculateAdultYears(age);

console.log(totalAdultYears);


let person = {
  name: "Max" ,//property
  greet() { //method
    console.log("Hello");
  }
};

person.greet();