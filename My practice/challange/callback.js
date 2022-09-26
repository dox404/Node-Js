const add=function(a,b,callback){
    callback(a+b)
}
add(1,2,function(sum){
    console.log(sum)
})