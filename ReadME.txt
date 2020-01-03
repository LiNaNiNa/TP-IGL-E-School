Introduction
MySchool is a virtual School manager via the internet. It assists all the functions any educational member wants to do: from making agendas to sending feedbacks.
MySchool is the link between Teachers, students and even administration alike in the most secure way. 
Checking Agendas, marks or even Courses, is easy, safe and fast using MySchool. 
MySchool: a creation of ESI students that is most recommended to use.

Development:
MySchool have been developed under a php-laravel environment using React JS library and a MySQL database.

Requirments and Installation
In order to use this project, for developpment purposes, your machine should have:
- Xampp ( an easy to install Apache distribution containing mySQL, PHP, and Perl. ) : https://www.apachefriends.org/fr/download.html
- Composer ( tool for dependency management in PHP. It allows you to declare the libraries your project depends on and it will manage (install/update) them for you. ): https://getcomposer.org/download/ 
- Node JS ( to use ReactJS ) : from https://nodejs.org/en/download/

Then you should clone this project from the gitHub ( link: https://github.com/LiNaNiNa/TP-IGL-E-School )

Once the project is in your local machine, run the Shell ( bash ) from its main directory.
Perform these commands:
1. composer install ( to install php related dependencies and libraries )
2. npm install ( to install node modules and ReactJS packages )
3. cp .env.example .env
4. php artisan key:generate ( Both 3 and 4 to create the local environment )

Then, you need to open Xampp control and activate Apache and MySQL servers.
you should follow the steps:
1. Go to http://localhost/phpmyadmin using the navigator
2. Create a new DataBase called 'laravel' and using the utf8_unicode_ci codage.
3. execute the command: 'php artisan migrate' in the Shell, to create the projects table.
4. execute the command: 'vendor/phpunit/phpunit/phpunit'. it will perform some unit tests
If the result is successful, you can use our application, it contains to users:
 -> The admin is 'Root' and his password is 'Root'.
 -> The student 'L_Mezdour' and her password is 'Lina'
Else, if there is an error, please contact us.

Now you should just execute the command 'php artisan serve--port=8000'
Then go to the navigator: 'localhost:8000/'
And here we are!

If you want to perform a Selenium Test ( using the browser ), 
1. Open the .env file and complete the line: APP_URL=http://localhost:8000
2. you have to execute the command:
a. php artisan dusk:chrome-driver xxx ( While xxx is the version of your chrome navigator, Ex 75 )
b. Php Laravel dusk.

In case of problems, please contact us.
