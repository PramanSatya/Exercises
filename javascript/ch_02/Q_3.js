let size = 12;
for(var i = 1; i <= size; i++){
  let line = "";
  if(i % 2 != 0){
    for(var j = 1; j <= size; j++){
      if(j % 2 != 0) line += " ";
      else line += "#";
    }
    console.log(line);
  }
  else{
    for(var j = 1; j <= size; j++){
      if(j % 2 != 0) line += "#";
      else line += " ";
    }
    console.log(line);
  }
}
