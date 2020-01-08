// Iterates over elements of an array invoking callback for each element. The callback should be passed the element, the current index, and the entire array.
const callback = function(element, index, array) {
 console.log(element +"," + index+"," +array);
}
// forEach(['a','b','c'], callback); → prints a,0,['a','b','c'] b,1,['a','b','c'] c,2,['a','b','c']
// For each element in the array, the callback we passed is called. The callback can be customized, but in the above example, the callback prints out the element, index, and entire array.
const forEach = (array, callback) => {
	for (let i = 0; i < array.length; i += 1) {
	  callback(array[i], i, array);
	}
  }

// console.log(forEach(['a','b','c'], callback));

// Creates an array of values by running each element in collection through callback
// Should we explain that map returns?
// Callback (element/value, index/key, array)
// map([1,2,3], function(element, index, array) {
//  return element * 3;
// }); -> [3,6,9]
// BONUS: use the forEach method you use to create map
const map = (array, callback) => {
	let result = [];
	forEach(array, element => {
		result.push(callback(element));
	})
	return result;
}

// Iterates over elements of collection, returning an Array of all elements callback returns truthy for.
// filter([1,2,3,4], function(element, index, collection) {
//  return element % 2 === 0;
// }); → [2,4]
// filter({a: 1, b: 2,c: 3,d: 4}, function(element, index, collection) {
//  return element % 2 !== 0;
// }); → [1,3]
const filter = (collection, callback) => {
	let result;
	if (Array.isArray(collection)) {
	  result = [];
	  collection.forEach(value => {
		if(callback(value)) {
		  result.push(value) ;
		}
	  });
	  //if not an array then definitely an object
	} else {
	  result = {};
	  Object.keys(collection).forEach(key => {
		if(callback(collection[key])) {
		  result[key] = collection[key];
		}
	  });
	}
	return result;
  }
  

// Removes all elements from array that callback returns truthy for and returning a collection of elements that did not pass the truthy test.
// The returned collection should be the same type that was passed in, either an Array or Object.
// reject([1,2,3,4], function(element, index, collection) {
//  return element % 2 === 0;
// }); → [1,3]
// reject({a:1, b:2, c:3, d:4}, function(value, key, collection) {
//  return element % 2 !== 0;
// }); → {b:2, d:4}
// Challenge: use filter

// const reject = (collection, callback) => {
// 	var passed = filter(collection, callback);
// 	if (Array.isArray(collection)) {
// 	  var failed = [];
// 	  for (var i = 0; i < collection.length; i++) {
// 		if (!passed.includes(collection[i])) {
// 		  failed.push(collection[i]);
// 		}
// 	  }
// 	  return failed;
// 	} else if (typeof collection === 'object') {
// 	  let failedObj = {};
// 	  for (var keys in collection) {
// 		if (!passed.includes(collection[keys])) {
// 		  failedObj[keys] = collection[keys];
// 		}
// 	  }
// 	  return failedObj;
// 	}
//   }

// refactored
const reject = (collection, callback) => {
	if (Array.isArray(collection)) {
		var result = collection.filter(function(elem) {
			return !callback(elem);
		})
		return result;
	}
	else {
		for (number in collection) {
			if (callback(collection[number])) {
				delete collection[number];
			}
		}
		return collection;
	}
}

// Creates an array without duplicate values from the inputted array.
// The order of the array is preserved.
// uniq([1,2,1]); → [1,2]
const uniq = array => array.filter((value, index, array) => array.indexOf(value) === index)

// Gets the index at which the first occurrence of value is found in array
// Returns -1 if element is not in array
// DO NOT USE THE BUILT-IN INDEXOF function
// indexOf([11,22,33], 11); → 0
// indexOf([11,22,33], 5); → -1
function indexOf(array, value) {
	//CODE HERE

	// under the hood
	// for (let i = 0; i < array.length; i++) {
	// 	if (array[i] === value) {
	// 	  return i;
	// 	}
	//   }
	//   return -1;
	// }

	// clean
	return array.indexOf(value);
}


// Returns a function that is restricted to invoking func once.
// Repeat calls to the function return the value of the first call.
const once = func => {
	//CODE HERE
	let executed = false;
	// grab all elements inside the arguments 
	return  (...args) => {
		if (!executed) {
			executed = true;
			return func.apply(this,args);
		}
	}
}


// Reduces collection to a value which is the accumulated result of running each element in collection through iteratee, where each successive invocation is supplied the return value of the previous. If accumulator is not provided the first element of collection is used as the initial value.
// If a start parameter is not provided, then set the start value as the zeroth index
// reduce([1,2], function(stored,current) {
//  return stored + current;
// }); → 3
// reduce([1,2], function(stored,current) {
//  return stored + current;
// },1); → 4
function reduce(array, callback, start) {
// Under the Hood
// 	let total;
// 	if (start === undefined) {
// 		  total = array[0];
// 		  console.log('total beg' + total)
// 	  } else {
// 		  total = start;
// 	  }
// 	  forEach(array, function(element) {
// 	    total = element[0]
// 		  total = callback(total, element);
// 		  //console.log('callback is' + callback)
// 		  console.log('total ' + total)
// 		  console.log('element ' + element)
// 		  console.log('array ' + array);
// 	  });
// 	  return total;
// }	

// Clean

	// if start is given a value, set it as value, otherwise set it as [0] in array
	let result = start ? start : array[0];
	// if start is given a value, start at 0, otherwise start at 1;
	let i = start ? 0 : 1;
		for (/*empty if incrementor is already declaredn & instantiated outside*/ ; i < array.length; i++) {
			result = callback(result, array[i])
		}
		return result;	
}

// Takes an array and a function as arguments.
// Returns true if the function produces true when each array element is passed to it.
// Otherwise it returns false.
// every([2, 4, 6], function(elem) {
//   return elem % 2 == 0;
// });  -> true
// every([2, 4, 7], function(elem) {
//   return elem % 2 == 0;
// });  -> false
// BONUS: use reduce in your answer
const every = (array, callback) => {
	
// original code
	// let result = true;
	// array.map(value => {
	//   if(callback(value) === false) result = false;
	// })  
	// return result;

// bonus
	// return array.reduce((bool, curr) => {
	// 	if (callback(curr) === false) {
	// 		bool = false;
	// 	};
	// 	return bool; 
	// }, true)

// bonus 2
	// the && operators say that exp1 & exp2 both have to be true to return as a true output
	return array.reduce((bool, curr) => bool && callback(curr), true)
}

// Flattens a nested array.
// flatten([1, [2, 3, [4]]]); → [1, 2, 3, [4]]
const flatten = array => {
	// empty array concating 
	return [].concat.apply([], array);
}


// Recursively flattens a nested array.
// flattenDeep([1, [2, 3, [4]]]); → [1, 2, 3, 4]
const flattenDeep =  array => {
	// recursive
	// let newArr = [];
	// for (let i = 0; i < array.length; i++) {
			// if next increment is a nested array, then we used concat recursively until we meet non-arrays
	//   if (Array.isArray(array[i])) {
	// 	newArr = newArr.concat(flattenDeep(array[i]))
	//   } else {
	// 	newArr.push(array[i]);
	//   }
	// }
	// return newArr;


	// method flat()
	return array.flat(Infinity);
}
