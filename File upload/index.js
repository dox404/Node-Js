const express=require ('express')
const multer = require ('multer')
const app = express()
const upload =multer({
    storage:multer.diskStorage({
        destination:function(req,file,cb){
            cb(null,'uploads')
        },
        filename:function(req,file,cb){
            cb(null,file.fieldname+'-'+'MAni'+'.py')
        }
    })
}).single('file_upload')
app.post('/upload',upload,(req,resp)=>{
    resp.send('File upload')
})
app.listen(3000)