# nodeWeather-application
Weather application using api.darksky.net API
1. Create account on heroku and install heroku on ubuntu : 

sudo snap install --classic heroku

heroku --version

2. Login from shell and run the command follow the instructions 

 heroku login
 
3. assuming you have creates ssh key:

ls -a -l ~/.ssh

4. add ssh key to heroku

heroku keys:add

5. Create application from project directory with terminal 

heroku create <project-name>
 
heroku create pramodk-weather-application

6. After creating porject will get two urls:

  example: 
  
https://pramodk-weather-application.herokuapp.com/ | https://git.heroku.com/pramodk-weather-application.git

7. Push the code :

  I)  git remote 
  
      heroku
      
      origin
      
  II) git push heroku master
  
  III) After deployment will get deployed url like:
  
  ex: https://pramodk-weather-application.herokuapp.com/
  
  




# To access application Demo Url

https://pramodk-weather-application.herokuapp.com/

