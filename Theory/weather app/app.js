const request=require('postman-request')
const url='http://api.weatherstack.com/current?access_key=fa09796a519ee2862dd5d01e4584161e&query=22.5726,88.3639'

request({url:url},(error, response) => {
   const data=JSON.parse(response.body)
   console.log(data)
})