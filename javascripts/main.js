var Planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

// Using vanilla JavaScript, update the HTML of the element with the id of vanilla_output with the following text: "This content generated with vanilla JavaScript".
var vanillaOutputEl = document.getElementById("vanilla_output");
vanillaOutputEl.innerHTML = "This content generated with vanilla JavaScript";

// Using jQuery, update the HTML of the element with the id of jquery_output with the following text: "This content generated with jQuery".
$("#jquery_output").text("This content generated with jQuery");

// Write a function named modulus that takes two arguments. The function should use the modulo operator to return the remainder between the first and second arguments. e.g. modulus(10, 3) // Should return 1.

function modulus (x, y) {
	return x % y;
}

console.log(modulus(10, 3));

// Write a function named doMath. This function takes three arguments. The first two will contain integer values. The third argument will be a function reference. Write two more functions named add and subtract. Execute the doMath function to add two numbers together. Then execute the doMath function to subtract the two numbers.


function doMath(int1, int2, funcReference) {
	return funcReference(int1, int2);

}

function add(int1, int2) {
	return int1 + int2;
}

function subtract(int1, int2) {
	return int1 - int2;
}

doMath (100, 25, add);
doMath (100, 25, subtract);

console.log(doMath (100, 25, add));
console.log(doMath (100, 25, subtract));

