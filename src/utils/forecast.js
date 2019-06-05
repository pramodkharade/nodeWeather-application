const request = require('request');

const getWeather=(lat,long, callback)=>{
    const url = 'https://api.darksky.net/forecast/886527ebb03683c89fca0634ee21c6d7/'+encodeURIComponent(lat)+','+encodeURIComponent(long)+'?units=si';
    request({
        url,
        json:true
    },(error,{body})=>{
        if(error){
            callback('Unable to connect to weather service',undefined);
          }else if(body.error){
            callback('unable to search location',undefined);
          }
          else{
            const data = body;
            callback(
                undefined,
                {
                    temp:data.currently.temperature,
                    rain:data.currently.precipProbability,
                    summary:body.daily.data[0].summary
                });
          }
    });
};
module.exports = getWeather;