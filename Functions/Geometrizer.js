const pi = 3.14159;

function calcCircumference(radius){
	let circumference = pi*(2*radius);
	return (`The circumference is ${circumference}`);
}

function calcArea(radius){
	let area = (radius*radius)*pi;
	return (`The area is ${area}`);
}

console.log(calcCircumference(25));
console.log(calcArea(6));