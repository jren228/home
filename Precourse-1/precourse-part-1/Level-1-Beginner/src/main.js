// adds 2 to inputted number
// ex: addTwo(5); -> 7
// ex: addTwo(6); -> 8
function addTwo(number) {
	//CODE HERE
	return number + 2;
}


// adds the two inputted numbers together
// ex: add(5, 10); -> 15
function add(num1, num2) {
	//CODE HERE
	return num1 + num2;

}


// adds all three inputted numbers together
// ex: addd(1,2,3); -> 6
// ex: addd(2,4,2); -> 8
function addd(...arguments) {
	//CODE HERE
	return arguments.reduce((acc, current)=>{
    return acc+=current;
  })
}



// subtracts the second inputted number from the first inputted number
// ex: subtract(5, 10); -> -5
function subtract(n1, n2) {
	//CODE HERE
	return n1 - n2;
}


// multiplies the inputted number by 2
// ex: multiplyByTwo(5); -> 10
// ex: multiplyByTwo(6); -> 12
function multiplyByTwo(numero) {
	//CODE HERE
	return numero * 2;
}


// multplies the two inputted numbers together
// ex: multiply(1,2); -> 2
// ex: multiply(2,2); -> 4
function multiply(val1, val2) {
	//CODE HERE
	return val1 * val2;
}


// multiplies all three inputted numbers together
// ex: multiplyy(1,2,3); -> 6
// ex: multiplyy(2,2,3); -> 12
function multiplyy(...arguments) {
	//CODE HERE
	return arguments.reduce((acc, curr) => {
		return acc += curr;
	})
}


// returns the square of the inputted number
// ex: square(5); -> 25
function square(value) {
	//CODE HERE
	return value * value;

}


// determines if the number is odd
// outputs true if the number is odd
// outputs false if the number is even
// ex: isOdd(4); -> false
// ex: isOdd(5); -> true
function isOdd(num) {
	//CODE HERE
	return num % 2 === 1;
}


// determines if the number is negative
// outputs true if the number is negative
// outputs false if the number is zero or positive
// ex: isNegative(-1); -> true
// ex: isNegative(1); -> false
// ex: isNegative(0); -> false
function isNegative(num) {
	//CODE HERE
	return num < 0;
}


// returns the absolute value of the inputted number
// ex: positive(-1); -> 1
// ex: positive(1); -> 1
function positive(num) {
	//CODE HERE
	return Math.abs(num);
}

// Returns boolean of whether argument is classified as a Number object
// isNumber(5); → true
// isNumber('hi'); → false
function isNumber(value) {
	//CODE HERE
	return typeof value === 'number';

}

// Returns boolean of whether argument is classified as an Array object
// isArray(5); → false
// isArray([1,2,3]); → true
function isArray(value) {
	//CODE HERE
	return Array.isArray(value);
}

// Returns boolean of whether argument is classified as an Object
// isObject(5); → false
// isObject([1,2,3]); → true
function isObject(value) {
	//CODE HERE
	return typeof value === 'object';
}

// return boolean of whether argument is classified as null
// isNull(null); -> true
// isNull(5); -> false
function isNull(value) {
	//CODE HERE
	return value === null;
}

