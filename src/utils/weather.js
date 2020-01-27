const request = require('request')
const weather = ({lat, long}, callback) => {
    const url = 'https://api.darksky.net/forecast/6d27260338bab35ec3382b7318f52973/'+ lat +','+ long +'?units=si';
    const options = {
        url,
        json : true
    }
    request(options, (error,response,body) => {
        if(error){
            callback('Unable to connect with weather app!',undefined);
        } else if (body.error){
            callback('Unable to find the location',undefined);
        } else {
            const data = body;
            callback(undefined,data);
            //console.log('It is currently ' + data.currently.temperature + ' Out now and there is ' + data.currently.precipProbability + ' chances of rain')
        }
    })
}

module.exports = weather;