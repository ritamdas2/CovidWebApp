# COVID-19 Web App (Daily Symptom Screening)
## By Ritam Das & Fatima Dantsoho


The COVID App is a web application that tracks your daily symptoms while providing you with important information about COVID around the world
using a reliable and accurrate data source (https://covid19api.com/). The COVID daily tracker app requires a Single Sign On through Gmail or Facebook. The admin user must single sign on through Google.

The Administrator Dashboard provides information about how healthy all users in the database are with regard to COVID-19. It will show the names, email ID and location of the user. Most importantly, it lets the admin know which users are at risk and which are not based on their responses in the COVID questionnaire. 

The User Dashboard displays comparative figures from countries around the world and the confirmed cases which are updated daily.

The COVID questionnaire is aimed at identifying both asymptomatic and symptomatic users who are carrying COVID-19 so they can be promptly treated and limit the spread. Upon completion of the questionnaire, the "At Risk" status of the user is updated. 

### Users will need to be manually added to the database through the Firebase console for a successful login.

Firebase will host this web application at the following link:

(https://tempcovid-48205.firebaseapp.com/)

With Firebase command line tools, it is possible to locally host this project. Clone this repository, add your own Firebase project tags to the "index.html", and host this project locally using the command "firebase serve". Don't forget to add yourself manually into the database and complete all attributes for best functionality.

This project took advantage of Google's Firebase as a backend service. More specifically, Firebase authentication, hosting, and realtime database were major components of this web application.

## App Structure
Within the app you'll find the following sections and tabs:

```
covid-web-app/
|
├── Dashboard
| - informational COVID data (API)
| - user information (At Risk/Not at Risk)
|
├── COVID Questionnaire
| - short daily symptom screening based on most prominent symptoms of COVID-19
|
├── Admin Dashboard
| - informational COVID data (API)
| - all user information (At Risk/Not at Risk, location, & email ID)
|

```

## Video Demonstration

Click to watch:

[![](http://img.youtube.com/vi/tSNSg1vnl6A/0.jpg)](http://www.youtube.com/watch?v=tSNSg1vnl6A "")


