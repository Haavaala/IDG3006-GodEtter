<?php

// Initial setup file

// Set the default timezone (for logs)
date_default_timezone_set("Europe/Oslo");

// Require composer autoload
require_once './vendor/autoload.php';

// Initialize dotenv and load .env file
$envloc = "./";
if (!file_exists($envloc . ".env")) {
    log_error("(CRITICAL) Environmental variable file was not found!",false);
    response(500, "Server error");
    exit;
}

// Use dotenv and load the .env file
$dotenv = Dotenv\Dotenv::createImmutable($envloc);
$dotenv->load();

// Require database class file
require_once './class/class_database.php';

// CORS
// Function to allow cors

cors();

function cors()
{
    // Allow from any origin
    if (isset($_SERVER['HTTP_ORIGIN'])) {
        // ! - må se på ting her
        // Decide if the origin in $_SERVER['HTTP_ORIGIN'] is one
        // you want to allow, and if so:
        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 86400');    // cache for 1 day
    } else {
        header("Access-Control-Allow-Origin: {$_ENV['HTTP_ORIGIN']}");
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 86400');    // cache for 1 day
    }

    // Access-Control headers are received during OPTIONS requests
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
            // may also be using PUT, PATCH, HEAD etc
            header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
            header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

        exit(0);
    }
}



// Check for local connection key
if (!isset($_ENV['CONNECTION_KEY'])) {
    response(500, "Server error");
    exit;
}

// Check that user has key set in their POST request
if (!isset($_POST['key'])) {
    response(401, "Unauthorized");
    exit;
}

// Check if the key matches the server's connection key
if ($_POST['key'] != $_ENV['CONNECTION_KEY']) {
    response(401, "Unauthorized");
    exit;
}
