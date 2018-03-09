const maxAge=80;

function calculateSupply(age, amtPerDay){
	var daysRem= (maxAge-age)*365;
	var amtToBeConsumed = Math.floor(amtPerDay)*daysRem;
	return(`You will need ${amtToBeConsumed} to last you until the ripe old age of ${maxAge}`);

}


console.log(calculateSupply(23,3));
console.log(calculateSupply(19,2));
console.log(calculateSupply(24,1.7));