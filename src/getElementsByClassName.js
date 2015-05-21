// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(node, className){
  var find = function(value, object){
    for (var key in object){
      if (value === object[key]){
          return true;
      }
    }
	}
  var elements = []
  if (find(className, node)){
  	elements.push(node);
  }
  if (node.childNodes){
  	for (var key in node.childNodes){
  		getElementsByClassName(node.childNodes[key]);
  	}
  }
  return elements;
};
