# GodEtter (back-end)
The back-end for GodEtter is made using PHP, and uses the Kassal.app API for product information. 

This README file will guide you on how to set up the project locally.

## Getting Started
These instructions will allow you to get the project set up and running on your local machine.

### Prerequisites
To get this project set up, you need **PHP** installed, **Composer** installed and a **MySQL** database. The project has been tested using PHP version 8.2.0. 

You also require access to the [Kassal.app API](https://kassal.app/api).

XAMPP / MAMP is recommended, and was used during development.



### Installing

#### Setting up the database
Import the pre-defined database structures included in the "db" folder in your MySQL database.

#### Environment variables
A .env file is required to run the project, but is not included in this repo. You can however make your own .env files with these values:

```
API_KEY - Kassal.app API Key
API_URL - Kassal.app API URL
DB_HOSTNAME - MySQL Database Hostname
DB_USER - MySQL Username
DB_PASS - MySQL Password
DB_NAME - MySQL Database Name
CONNECTION_KEY - Unique random connection key which should match in the front-end
LOG_FOLDER - Folder location where logs should appear
HTTP_ORIGIN - URL to the front-end for CORS
```

#### File locations
If you plan to have the .env in another folder or similar, you can change it's location in the setup.php file.
You can also change the class_database.php location here, if you prefer to have that someplace else.

#### Dependencies
Install the dependencies using Composer.

```bash
composer install
```

#### Running
Run the project using your preferred PHP development software by serving the backend folder.

## Built with
- [PHP](https://www.php.net/)
- [MySQL](https://www.mysql.com/)
- [phpdotenv](https://github.com/vlucas/phpdotenv)

## Authors
See the main [README.md](../README.md) file for authors.