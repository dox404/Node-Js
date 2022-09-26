require('../src/db/mongoose')
const User=require('../src/models/user')
// 62bff85ffd0fe5299903aac8


// User.findByIdAndUpdate('62bff85ffd0fe5299903aac8',{age:1}).then((user) => {
//     console.log(user)
//     return User.countDocuments({age:1})
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })
const UpdateAgeAndCount=async(id,age)=>{
    const user=await User.findByIdAndUpdate(id,{age})
    const count=await User.countDocuments({age})
    return count

}
UpdateAgeAndCount('62bbe4d9fb0ccef0ca9209fa',2).then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})