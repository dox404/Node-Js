const path=require('path')
const express=require('express')

const app=express()
const publiDirectory=path.join(__dirname,'../public')
app.use(express.static(publiDirectory))

app.listen(3000,()=>{
    console.log('Server started in port 3000')
})