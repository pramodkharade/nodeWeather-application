console.log('Public assets js loaded!');
const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
var messageOne = document.querySelector('#message-1');
var messageTwo = document.querySelector('#message-2');
weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const location = search.value;
    messageOne.textContent = 'Loading...';
    messageTwo.textContent = '';
    fetch('/weather?address='+location).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            messageOne.textContent = data.error;
        } else {
            messageOne.textContent = 'Location: '+data.locations;
            messageTwo.textContent = 'ForeCast: '+data.forecast.summary+'it is currently '+data.forecast.temp+' degress out. There is a '+data.forecast.rain+'% chance of a rain.';
            console.log('Locations:', data.locations);
            console.log('Forecast:', data.forecast.summary);
        }
    });
});
    
});