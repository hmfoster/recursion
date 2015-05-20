// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

  //Base Case
  if (typeof obj === 'number' || obj === null || typeof obj === 'boolean'){
  	return String(obj);
  }
  else if (typeof obj === 'string'){
  	return '"'+obj+'"';
  }
  
  // Recursive case for arrays
  else if (obj instanceof Array){

  	var transformedArray = obj.map(function(item){
  		if (item === undefined || typeof item === 'function'){
  			return 'null';
  		} else{
  			return stringifyJSON(item);
  		}
  	}); 

  	return '['+String(transformedArray)+']';
  } 

  //Recursive case for objects
   else {
    var transformedObject = '{';
    var objKeys = [];
    var objValues = [];

    for (var key in obj){
      if(obj[key] === undefined || typeof obj[key] === 'function'){
        objKeys = objKeys;
        objValues = objValues;
      } else{
        objKeys.push(stringifyJSON(key));
        objValues.push(stringifyJSON(obj[key]));
      }
    } 

    for (var i = 0; i<objKeys.length; i++){
        transformedObject += objKeys[i]+':'+objValues[i];
        if (i<objKeys.length-1){
          transformedObject += ',';
        }
      }
      
    return transformedObject += "}";
  }
};
