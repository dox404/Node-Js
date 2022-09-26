const request=require('postman-request');

const url='http://api.weatherstack.com/current?access_key=fa09796a519ee2862dd5d01e4584161e&query=22.5726,88.3639'

request({url:url,json:true},(error,responce)=>{//we declared small jason here as true becooz if we do that then we dont have to parse the jason file to understand
    
    console.log('In '+responce.body.location.name+ ' there is '+responce.body.current.temperature+' degree temperature onwords')
})
