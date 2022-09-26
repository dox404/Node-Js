const fs=require("fs");

fs.readFile('./notes.txt','utf8',function(err,data){
  console.log(err,data)  
})
console.log("this is next")