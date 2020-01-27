const request = require('request')
const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoiaGFyc2gtcGF0ZWwwNDk2IiwiYSI6ImNrMTh6bW1qZTF3b3kza28zaDFwYmYzcXMifQ.jDlcZIwfo0IgZaq0TA3V1Q&&limit=1';
    const options = {
        url,
        json : true
    }
    request(options, (error,response,body) => {
        if(error){
            callback('Unable to connect with mapbox',undefined);
        } else if(body.message || body.features.length === 0){
            callback('Unable to find location please try another search',undefined);
        } else {
            const data = body;
            const cord = {
                lat  : data.features[0].center[1],
                long : data.features[0].center[0]
            }
            callback(undefined,cord);
        }
    })
}

module.exports = geocode;