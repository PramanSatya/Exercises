function reverseArray(array){
let arr = [];
  for(let i of array){
  arr.unshift(i);
  }
  return arr;
}
function reverseArrayInPlace(array){
  for(let i = 0; i <= array.length/2; i++){
    let temp = array[i];
    array[i] = array[array.length-i-1]
    array[array.length-i-1] = temp;
  }
  return array;
}

console.log(reverseArray(["A", "B", "C"]));
let arrayValue = [1, 2, 3, 4, 5, 6];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);

