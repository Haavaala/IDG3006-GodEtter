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
