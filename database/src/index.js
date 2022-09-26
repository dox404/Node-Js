const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task= require('./models/task')
const userRouter=require('./routers/user')
const taskRouter=require('./routers/task')

const app = express()
const port = process.env.PORT || 3000


app.use(express.json())

app.use(userRouter)
app.use(taskRouter)


const bcrypt=require('bcryptjs') // importing the bcrypt module
const myFunction=async()=>{
    const password='Mani123!'
    const hashedPassword= await bcrypt.hash(password,8)//hashing the password
    console.log(password)
    console.log(hashedPassword)
    const isMatch=await bcrypt.compare('mani123!',hashedPassword) //comparing the password
    console.log(isMatch)

}

myFunction()







app.listen(port, () => {
    console.log('Server is up on port ' + port)
})