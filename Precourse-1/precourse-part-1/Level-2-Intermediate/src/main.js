// this function accepts an array of numbers
// and returns an array of only the odd numbers
// ex: returnOdds([1,2,3,4,5,6,7]); -> [1,3,5,7]
function returnOdds(array) {
	//CODE HERE
	return array.filter(value => value % 2 === 1)
}


// this function accepts an array of numbers
// and returns an array of only the even numbers
// ex: returnEvent([1,2,3,4,5,6,7]); -> [2,4,6]
function returnEvens(array) {
	//CODE HERE
	return array.filter(value => value % 2 === 0)
}


// returns only the max element from the inputted array of numbers
// ex: findMax([1,25,6,3]); -> 25
function findMax(array) {
	//CODE HERE
	return Math.max(...array);
}

/**
 * remove leading and trailing whitespace or specified characters from string
 * trim(' hello '); -> 'hello'
 */
function trim(string) {
	return string.trim();
}

// returns an empty array object. this object should have the following methods:
// push(val) adds val to the end of the array
// pop() removes a value from the end and returns it
// unshift(val) adds val to the beginning of the array
// shift() removes a value from the beginning and returns it
// the goal of this problem is to reverse engineer what array methods are actually doing and return an object that has those methods
function createArray() {
	//CODE HERE
	let result = [...arguments];
  // console.log(result)
	const newObject = {
		push: value => {
      console.log('This is pushing:', value, 'to array[array.length-1]')
      return result.push(value)
      // return result;
		},
    pop: () => {
      console.log('This is popping: from array[array.length-1]')
			return result.pop()
      // return result;
    },
    unshift: value => {
      console.log('This is unshifting:', value, 'into array[0]')
      return result.unshift(value)
      // return result;
    },
    shift: () => {
      console.log('This is shifting: taking [0] from array')
      return result.shift()
      // return result;
    }
	};
  return newObject;
}

const arraySample = [1,2,3,4,5,6]; 

console.log(createArray(arraySample).unshift('cooookies')) //  ['coooookies', 1,2,3,4,5,6];
