const request=require('postman-request');

const url='http://api.weatherstack.com/current?access_key=fa09796a519ee2862dd5d01e4584161e&query=22.5726,88.3639'

request({url:url,json:true},(error,responce)=>{//we declared small jason here as true becooz if we do that then we dont have to parse the jason file to understand
    
    console.log('In '+responce.body.location.name+ ' there is '+responce.body.current.temperature+' degree temperature onwords')
})




const geocode=(address,callback)=>{

    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoibXVrdGFydWwyMDAxIiwiYSI6ImNsNDhlZGUxNTByaWYzZG1zcW8zd2ExdTQifQ.fEN9U1A3bjcCatFg48rbOQ'


    request({url:url,json:true},(error,responce)=>{
        if(error){
            callback('unable to connect location services',undefined)
        }else if(responce.body.features.length===0){
            callback('unable to find location ,try another search',undefined)
        }else{
                callback(undefined,{
                    latitude:responce.body.features[0].center[0],
                    longitude:responce.body.features[0].center[1],
                    location:responce.body.features[0].place_name
                })
        }
      
    })
}
    



geocode('mumbai ',(error,data)=>{
    // console.log('Error',error)
    console.log('Data',data)
   
})