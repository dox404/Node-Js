const request = require("postman-request")

const geocodeUrl='https://api.mapbox.com/geocoding/v5/mapbox.places/kolkata.json?access_token=pk.eyJ1IjoibXVrdGFydWwyMDAxIiwiYSI6ImNsNDhlZGUxNTByaWYzZG1zcW8zd2ExdTQifQ.fEN9U1A3bjcCatFg48rbOQ'

request({url:geocodeUrl,json:true},(error,responce)=>{
    const latitude=responce.body.features[0].center[0]
    const longitude=responce.body.features[0].center[1]
    console.log(latitude,longitude)

})