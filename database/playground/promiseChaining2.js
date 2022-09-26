// deleting the douccument using promise chaining

require('../src/db/mongoose')
const Task =require('../src/models/task')
// Task.findByIdAndDelete('62dbab3693c08de60d375ccb').then((task)=>{
//     console.log(task)
//     return Task.countDocuments({completed:false})
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })
const deleteTaskAndCount=async (id)=>{
    const task =await Task.findByIdAndDelete(id)
    const count =await Task.countDocuments({completed:false})
    return count
}

deleteTaskAndCount('62bff817db16b15bdc2130e8').then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})