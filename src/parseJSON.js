// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here
  if (json[0] === "["){
    var parsed = json.slice(1, json.length -1).split(",");
    for (var i = 0; i < parsed.length; i++) {
      parsed[i] = parsed[i].trim();
      if (parsed[i].length === 0){
        parsed.splice(i,2);
      } 
      else if (parsed[i][0] === "["){
        parsed[i] = parseJSON(parsed[i]);
      } else if (Number(parsed[i])){
        parsed[i] = Number(parsed[i]);
      }
    }
  } return parsed;
}
