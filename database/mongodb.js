const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager-api'
MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }
    // const db = client.db(databaseName)
    // db.collection('users').insertOne({
    // name:'Muktarul Hoque',
    // age:20
    // },(error,result)=>{
    //     if(error){
    //         return console.log('Unable to insert user')
    //     }
    //     console.log(result.ops)
    // })


    db.collection('tasks').insertOne({// deleting the database data
        name:'Manirul Hoque',
        age:28,
        phone:8391019909
    }).then((result )=>{
        console.log(result)
    }).catch((error)=>{
        console.log(error)
    })

    
    

})