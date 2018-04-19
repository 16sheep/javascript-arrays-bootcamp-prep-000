var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']



function addElementToBeginningOfArray (array, el) {
  var newArr=[...array];
  newArr.unshift(el);
  return newArr;
}

function destructivelyAddElementToBeginningOfArray (array, el) {
  array.unshift(el);
  return array;
}

function accessElementInArray (arr, i) {
  return arr[i];
}

<<<<<<< HEAD
function addElementToEndOfArray (array, el) {
  var newArr=[...array];
  newArr.push(el);
  return newArr;
}

function destructivelyAddElementToEndOfArray (array, el) {
  array.push(el);
  return array;
}

function destructivelyRemoveElementFromBeginningOfArray (array) {
  array.shift();
  return array;
=======
function addElementToBeginningOfArray (array, el) {
  var newArr=[...array];
  newArr.unshift(el);
  return newArr;
}

function destructivelyRemoveElementFromBeginningOfArray (array) {
  return array.shift();
>>>>>>> 95444e48801f06b80d74591c8003948a7ead4630
}

function removeElementFromBeginningOfArray (array) {
  newarray = array.slice(1);
  return newarray;
}

function destructivelyRemoveElementFromEndOfArray (array) {
<<<<<<< HEAD
  array.pop();
=======
  array.slice(0, array.length - 1);
>>>>>>> 95444e48801f06b80d74591c8003948a7ead4630
  return array;
}

function removeElementFromEndOfArray (array) {
  var newarray = array.slice(0, array.length - 1);
  return newarray;
}