const path = require('path');
const express = require('express');
const hbs = require('hbs');
const geocode = require('./utils/geocode');
const getWeather = require('./utils/forecast');
console.log(__dirname);
console.log(path.join(__dirname,'../public'));
const app = express();
/****Define path to express config*****/
const publicdirectoryPath = path.join(__dirname,'../public');
const viewPath = path.join(__dirname,'../templates/views');
const partialPath = path.join(__dirname,'../templates/partial');
const port  = process.env.PORT || 3000;
/****Setups handlebar and views location**** */
app.set('view engine', 'hbs');
app.set('views', viewPath);
hbs.registerPartials(partialPath);
/****Static directory to serve *** */
app.use(express.static(publicdirectoryPath));
/*** Routes*****/
app.get('',(req,res)=>{
    res.render('index',{
        title:"Weather App",
        name:'Pramod Kharade'
    });
});
app.get('/help',(req,res)=>{
    res.render('help',
    {
        title:"Help",
        helptext:'Nodejs is existing to learn...!',
        name:'Pramod Kharade'
    });
});
app.get('/about',(req,res)=>{
    res.render('about',{
        title:"About Me",
        name:'Pramod Kharade'
    });
});

app.get('/weather',(req,res)=>{
    if(!req.query.address){
        res.send({
            'error':'You must provide a address.'
        });
    }
    geocode(req.query.address,(error,{latitude,longitude,locations}={})=>{
        if(error){
            return res.send({error});
        }
        getWeather(latitude,longitude,(error,forecastData)=>{
            if(error){
                return res.send({error});
            }
            res.send({
                'forecast':forecastData,
                locations,
                address:req.query.address
            });
        });
    })
});
app.get('/help/*',(req,res)=>{
    res.render('404',
    {
        title:"404 Page",
        errorText:'Help article not found',
        name:'Pramod Kharade'
    });
});
app.get('*',(req,res)=>{
    res.render('404',
    {
        title:"404 Page",
        errorText:'Page not found',
        name:'Pramod Kharade'
    });
});

app.listen(port,()=>{
    console.log('Server is running on '+port);
});