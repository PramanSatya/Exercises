function arrayToList(array){
  let list = null;
  if(array.length == 0)
    return null;
  else{
    list = {
      value: array[0],
      rest: arrayToList(array.slice(1))
    };
  }
  return list;
}
function listToArray(list){
  let arr = [];
  if(list.rest == null)
    return list.value;
  else{
    arr.push(list.value);
    let x = listToArray(list.rest);
    arr = arr.concat(x);
  }
  return arr;
}
console.log(listToArray(arrayToList([10,20,30])));
