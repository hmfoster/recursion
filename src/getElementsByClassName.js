// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  var elements = [];
  var findElements = function(element){
  	if (element.classList.contains(className)){
  		elements.push(element);
  	} for (var node in element.childNodes){
  		findElements(element.childNodes[node]);
  	}
  } return findElements(document.body)
};
