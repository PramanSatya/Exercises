const countChar = (str, char) => {
  let count = 0;
  for(var i = 0; i <= str.length-1; i++){
    if(str[i] == char)
      count += 1;
  }
  return count;
}
console.log(countChar("praman","a"))
