// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here
  var parsed;
  
  //Base values
  (Number(json) || json === "0") ? parsed = Number(json): parsed = json;
  json[0] === '"' ? parsed = json.slice(1, json.length -1): parsed = json;
  if (json === 'true'){
    parsed = true;
  } else if (json === 'false'){
    parsed = false;
  } else if (json === 'null'){
    parsed = null;
  } 
  
  //Recursive for arrays
  else if (json[0] === "[" || json[json.length-1] === "]"){
    if (json[0] !== "[" || json[json.length-1] !== "]"){
      throw new SyntaxError('Not parseable');
    }
    parsed = json.slice(1, json.length -1).split(",");
    for (var i = 0; i < parsed.length; i++) {
      parsed[i] = parsed[i].trim();
      if (parsed[i].length === 0){
        parsed.splice(i,2);
      } else {
        parsed[i] = parseJSON(parsed[i]);
      }
    }
  } 
  
  //Recursive for objects
  else if (json[0] === "{" || json[json.length-1] === "}"){
    var contents = json.slice(1, json.length -1).split(",").map(function(item){return item.split(":");});
    parsed = {};
    for (var i = 0; i < contents.length; i++) {
      contents[i][0] = parseJSON(contents[i][0].trim());
      contents[i][1] = parseJSON(contents[i][1].trim());
      parsed[contents[i][0]] = contents[i][1];
    }

  } return parsed;
};
