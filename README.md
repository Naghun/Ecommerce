# Ecommerce
Django-React Ecommerce (DRF/Bootstrap/JWT/Redux)

This is my first Ecommerce application.
Backend is designed with Python's Django framework.
Django Rest Framework (DRF) is responsible for handling API calls, while JWT (JSON Web Tokens) is responsible for authentication and tokens.
Frontend is built with React and Redux, styles with Bootstrap and CSS.

## Instalation

To set up and run this application, make sure you have Python and Node.js installed on your system
Python: [official Python website](https://www.python.org/downloads/).
Node.js: [official Node.js website](https://nodejs.org/).
Make Virtual environment (optional).
After cloning repository make sure you install requirements from requirements.txt file
Open 2 separated terminals to start python backed app on one and react app on other terminal.
Python terminal:  
- Navigate to backend (cd backend) and type: python manage.py runserver
React terminal:
- Navigate to frontend and type: npm start
- In case there is a problem try to install Node.js dependencies with: >>>npm install

App is not finished, only login authentification is done if you want to (or have to) login use:
Username: Naghun / test
Password: sifra123  -  for both acc
Create super user via command shell: >>>python manage.py createsuperuser 
or add another user via http://127.0.0.1:8000/admin
