# coreyo
Weather &amp; News api with auth assignment for coreyo company

# Features:-
1. You will find latest weather report on this website.
2. It has features of authentication, Login and Register User.
3. The authenticated user can also check the latest news arround the world


# Technologies that we used :-
1. Node.js
2. Express.js
3. MongoDB

# Glimpse of Our Work:-

# working instruction 
To run the project first downlode the zip file, then follow the bellow steps
1. Unzip the folder.
2. downlode the node_modules by run the command "npm i".
3. create a '.env' file outside the src and add "JWT_SECRET_KEY=anything123".
4. now to start the project run command "npm start".
5. To get the data for different pages run the bellow mention link as per the  pages in to the Postman. 

## Register Page
Users can create a account on this page.
(http://localhost:8000/signup)

## Login Page
Only valid user can login on this web application and save the bearer token which is auto generate after login. If user is not valid, then it will show an error. If user is valid, then only user can open the news page
(http://localhost:8000/signin)

### Weather Page
Use the get method and pass the bellow api to check the weather data.
(http://localhost:8000/weather)

### News Page
This news is a privet page so the user need to login first. is the user is authenticated then Use the get method and pass the bellow api to check the news data.
(http://localhost:8000/news)


 ### Thank you
