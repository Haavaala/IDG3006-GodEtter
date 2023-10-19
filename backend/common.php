<?php

// Initial setup file for all scripts
require_once("setup.php");

// --------------------------------------------
// :::::::: Common script functions


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

// Function for sanitizing a string
function clean_string($var)
{
    $var = htmlentities($var, ENT_QUOTES);
    $var = strip_tags($var);
    $var = stripslashes($var);
    $invalid_characters = array("$", "%", "#", "<", ">", "|");
    $var = str_replace($invalid_characters, "", $var);
    return $var;
}

// Function to allow cors
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

// Function to check if certain values are set
function CheckSetValues($check_barcode, $check_device_id)
{
    // Check if API KEY is set
    if (!isset($_ENV['API_KEY'])) {
        log_error("(CRITICAL) API_KEY was not set as an enviromental variable!",false);
        response(500, "Server error");
        exit;
    }

    // Check if API URL is set
    if (!isset($_ENV['API_URL'])) {
        log_error("(CRITICAL) API_URL was not set as an enviromental variable!",false);
        response(500, "Server error");
        exit;
    }

    if ($check_barcode) {
        // Check if barcode is set by GET
        if (!isset($_GET['barcode']) || empty($_GET['barcode'])) {
            response(400, "Barcode not set", NULL);
        }
    }

    if ($check_device_id) {
        // Check if device_id is set by POST
        if (!isset($_POST['device_id']) || empty($_POST['device_id'])) {
            response(400, "Device id not set");
        }
    }
}

// Function to log an error to file
function log_error($string,$user_data)
{
    if (!isset($_ENV['LOG_FOLDER'])){
        response(500,"Critical server error");
        //exit;
    }
    // Create date + time variables for logs
    $filedate = date('Y-m-d');
    $date = date('Y-m-d G:i:s', time());

    // Retrieve the log folder
    $log_folder = $_ENV['LOG_FOLDER'];

    // Concatenate path variables to use
    $folderpath = $log_folder . "/";
    $filepath =  $folderpath . "/" . $filedate . ".txt";

    // Set the error data to be outputted in the file
    $error_data = "Error: " . $date . ": " . $string;

    // Return user data with the error on request
    if ($user_data){
        // Get the remote addr + the http_x_forwarded_for if it is set
        $r_ip = $_SERVER['REMOTE_ADDR'];

        if (isset($_SERVER['HTTP_X_FORWARDED_FOR'])){
            $f_ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
        } else {
            $f_ip = "-none-";
        }

        // Return this with the data
        $error_data = "Error ". $date .": User (R_IP: ". $r_ip . " / F_IP: ". $f_ip . ") " . $string;
    }

    // Create the log folder if it does not exist
    if (!file_exists($log_folder)) {
        mkdir($log_folder);
    }

    // Append the old log file if it exists already
    if (file_exists($filepath)) {
        $oldfile = file_get_contents($filepath);
        $error_data = $oldfile . "\n" . $error_data;
    }

    // Write the contents to file
    file_put_contents($filepath, $error_data);

    // Unset path variables
    unset($log_folder);
    unset($folderpath);
    unset($filepath);
}
