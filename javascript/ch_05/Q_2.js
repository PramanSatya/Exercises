"use strict";
function fun(value, test, update, body){
  for(let i=value; test(i);i=update(i)){
    body(i);
  }
}

fun(3, n => n>0, n => n-1, console.log)
