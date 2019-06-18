function range(start, end, step = start<end?1:-1){
let arr = [];
  if(start < end){
    if(step < 0) { return "step can't be negative";}
    else{
      for(let i = start; i <= end; i = i + step){
        arr.push(i);
      }
    }
  }
  else{
    if(step > 0) {return "step can't be positive";}
    else{
      for(let i = start; i >= end; i = i + step){
        arr.push(i);
      }
    }
  }
  return arr;
}
let array = range(10,1,-3)
console.log(array);
function sum(array){
  let sum = 0;
  for(let i of array){
    sum += i;
  }
  return sum;
}
console.log(sum(array));
