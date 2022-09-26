const express =require('express')
require('./db/database')
const path=require('path')

const app =express()
const port=process.env.PORT || 3000

// const static_path=path.join()

// console.log(path.join(__dirname))
// app.use(express.static())

app.get('/',(req,res)=>{
    res.send("Hello from mani")
})
app.get('/register',(req,res)=>{
    res.render('index.html')
})
app.post('/register',async(req,res)=>{
    try{
        // console.log(req.body.fname)
        // res.send(req.body.fname)
       const data=new User({
        Firstname:req.body.fname,
        Lastname:req.body.lname,
        Email:req.body.email,
        PhoneNumber:req.body.phone,
        Gender:req.body.gender,
        Password:req.body.password
       }) 
       const registered=await data.save()
       res.status(201).send('registration sucessfull')
      
    }catch(e){
        res.status(400).send(e)
        console.log(e)
    }

    
})

// app.post()

app.listen(port,()=>{
    console.log(`Server is running at port number ${port} `)
})