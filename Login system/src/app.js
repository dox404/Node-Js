const express=require('express')
const app=express()
const path=require('path')
require('./db/mongo')
const hbs=require('hbs')
const User=require('./models/login')
const port =process.env.PORT ||3000

//setting the path
const static_path=path.join(__dirname,'../public')
const template_path=path.join(__dirname,'../templates/views')
const partial_path=path.join(__dirname,'../templates/partials')

// using the paths
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static(static_path))
app.set('view engine','hbs')
app.set('views',template_path)
hbs.registerPartials(partial_path)

app.get('/',(req,res)=>{
    res.render('home')
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
app.get('/register',(req,res)=>{
    res.render('register')
})
app.get('/home',(req,res)=>{
    res.render('home')
})
app.get('/contact',(req,res)=>{
    res.render('contact')
})
app.get('/about',(req,res)=>{
    res.render('about')
})
app.get('/login',(req,res)=>{
    res.render('login')
})


app.listen(port,()=>{
    console.log(`server is up on port ${port}`)
})




