function celsiusToFahrenheit(){

	let celsius = 200;
	let fahrenheight1 = (celsius*(180/100))+32;
	return (`${celsius}°C is ${fahrenheight1}°F`)
}

function fahrenheitToCelsius(){
	let fahrenheight = 200;
	let celsius2 = (fahrenheight-32)*(100/180);
	return (`${fahrenheight}°F is ${celsius2}°C`)

}

console.log(celsiusToFahrenheit());
console.log(fahrenheitToCelsius());