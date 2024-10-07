const prompt = require("prompt-sync")({sigint: true});
let age = prompt("What is your age?: ");
 //age = Number.parseInt(age)
if (age <= 12){
    console.log("You are a child")
}else if (age >= 13 && age <= 19) {
    console.log("You are a teenager")
}else{
    console.log("You are an adult")
}