# To-do list
Is a WEB application used for storing/creating/editing and deleting tasks and many more.  
Built on a RESTful API server using Express, MongoDB and AngularJS.  
It contains two main sections: To-do list and QaA(Questions and Answers).  
Actively in development is a new section called Blog.  
Created by Joesepherus.  

![screen of the website](https://raw.githubusercontent.com/Joesepherus/To-do-list/master/client/css/img/toDoList-v1.1-24-8-2017.png)

## Technologies used ##  

NodeJS - javascript on the server.  
Express - web framework, that has a webserver to handle our requests.  
MongoDB - for data storage.  
AngularJS - client-side javascript framework for MVC.  
Bootstrap - HTML, CSS and JS framework for responsive websites.

## How to start ##

Clone or download the repository, then run npm install and nodemon. Ofcourse you need to have a mongodb set up, you can read up on that below.

## How to set up mongodb ##

Open CMD.  
Go to your folder where you installed mongodb ( ie. 'cd C:\Program Files\MongoDB\Server\3.4\bin').  
Set up the route for your database and start it (i.e. '"C:\Program Files\MongoDB\Server\3.4\bin\mongod.exe" --dbpath "D:\test\mongodb\data"').  
Open another CMD.  
Again go to where you installed mongodb(i.e 'cd C:\Program Files\MongoDB\Server\3.4\bin').  
To fill up the database with a few books, we have prepared a JSON file.  
To import this JSON file to the databse use this command: 'mongoimport --db bookstore --collection books --type JSON --file "your location of cloned/downloaded repository, i.e C:\Users\jozef\Desktop\NodeJS\bookstore"\books.json --jsonArray'.  
To connect to the databse use: 'mongo'.