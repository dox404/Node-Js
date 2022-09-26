const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/Registration-data", { useNewUrlParser: true}).then(() => {
    console.log("Connection successFull")
}).catch((e) => {
    console.log("no connection")
})

// useUnifiedTopology: true, useCreateIndex: true 