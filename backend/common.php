<?php
// Require composer autoload
require_once './vendor/autoload.php';

// Initialize dotenv and load .env file
$dotenv = Dotenv\Dotenv::createImmutable('./');
$dotenv->load();

// Require database
require_once './class/class_database.php';

// Check for local key
if (!isset($_ENV['CONNECTION_KEY'])) {
    response(500, "Server error");
    exit;
}

if (!isset($_POST['key'])) {
    response(401, "Unauthorized");
    exit;
}

if ($_POST['key'] != $_ENV['CONNECTION_KEY']) {
    response(401, "Unauthorized");
    exit;
}

// Function to return a json response
function response($status, $data)
{
    http_response_code($status);

    if ($status == 200 || $status = 201 || $status = 300) {
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

function cors()
{

    // Allow from any origin
    if (isset($_SERVER['HTTP_ORIGIN'])) {
        // Decide if the origin in $_SERVER['HTTP_ORIGIN'] is one
        // you want to allow, and if so:
        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
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

function CheckSetValues($check_barcode, $check_device_id)
{
    if (!isset($_ENV['API_KEY'])) {
        // Check if API key is set
        response(500, "Server error");
        exit;
    }

    if (!isset($_ENV['API_URL'])) {
        // Check if API url is set
        response(500, "Server error");
        exit;
    }

    if ($check_barcode) {
        if (!isset($_GET['barcode']) || empty($_GET['barcode'])) {
            response(400, "Barcode not set", NULL);
        }
    }

    if ($check_device_id) {
        if (!isset($_POST['device_id']) || empty($_POST['device_id'])) {
            response(400, "Device id not set");
        }
    }
}
