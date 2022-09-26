const request=require('postman-request')
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
    



geocode('kandi murshidabad west bengal ',(error,data)=>{
    console.log('Error',error)
    console.log('Data',data)
})