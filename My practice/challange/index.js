const fs=require("fs");//here we have imported the fs module

const data=fs.readFileSync("data.json")//here we have read the file and store it in data variable
const strData=data.toString()//here we have converted the binary file to string becoz readFileSync returned us a binary file
const finalData=JSON.parse(strData)//here we converted the JSON file to a proper object
finalData.name="hhhhhhhhhhhhhhhhh"//here we changed the object key value
finalData.age=1500000000//here also same
finalData.home="alampur"//here also same
const final=JSON.stringify(finalData)//here we have changed theobject to JSON
fs.writeFileSync('data.json',final)//here we have overwritten the external file
