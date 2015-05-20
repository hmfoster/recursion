// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  // Termination Condition if obj is function or undefined
  // Base case is if item is not an array or object;
  if (typeof obj === 'number' || obj === null || typeof obj === 'boolean'){
  	return String(obj);
  }
  //Check if item is a string value
  else if (typeof obj === 'string'){
  	return '"'+obj+'"';
  }
  //Check if item is a number, null, or Boolean
  //Check if item is undefined
  // Recursive case for arrays
  //Recursive case for objects
};
