function fun(array, test){
  for(let i of array){
    if(test(i))
      continue;
    else
      return false;
  }
  return true;
}
console.log(fun([1,3,5], n => n < 10));
function every(array, test){
  if(array.some(n => n > 10))
    return false;
  else
    return true;
}
console.log(every([1,3,5], n => n < 10));

