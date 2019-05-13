const isEven = (x) => {
  if(x==1)
    return false;
  else if(x==0)
    return true;
  else if(x<0)
    return isEven(-x)
  else
    return isEven(x-2);
};
result=isEven(-2);
console.log(result);
