<?php
// Require composer autoload
require_once __DIR__ . '/vendor/autoload.php';

// Initialize dotenv and load .env file
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

// Function to return a json response
function response($status,$data,)
{
    http_response_code($status);
	
	if ($status == 200){
        $response = ['data' => $data];
    } else {
        $response = ['error' => $data];
    }
	header('Content-Type: application/json; charset=utf-8');
	echo json_encode($response);
}

// Function to clean a string
function clean_string($var)
{
    $var = htmlentities($var, ENT_QUOTES);
    $var = strip_tags($var);
    $var = stripslashes($var);
    $invalid_characters = array("$", "%", "#", "<", ">", "|");
    $var = str_replace($invalid_characters, "", $var);
    return $var;
}