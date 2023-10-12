<?php

// Require common file
require_once __DIR__ . '/common.php';

cors();

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

if (isset($_GET['barcode']) && !empty($_GET['barcode'])) {
    // Check if barcode is set in GET request
    $barcode = $_GET['barcode'];

    // Clean the string to prevent injections
    clean_string($barcode);

    // Run the API request
    barcode_req($barcode);
} else {
    response(400, "Barcode not set", NULL);
}


function barcode_req($barcode)
{
    // Get the API token key
    $token = $_ENV['API_KEY'];

    // Combine the API_URL and the barcode to get a full request url
    $url = $_ENV['API_URL'] . $barcode;

    // Setup the request
    $connection = curl_init($url);

    // Returns the data/output as a string instead of raw data
    curl_setopt($connection, CURLOPT_RETURNTRANSFER, true);

    // Set auth headers
    curl_setopt($connection, CURLOPT_HTTPHEADER, array(
        'Content-Type: application/json',
        'Authorization: Bearer ' . $token
    ));

    // Get stringified data.
    $data = curl_exec($connection);

    // Close the connection
    curl_close($connection);

    // Decode the data from json
    $data = json_decode($data);

    // Unset variables
    unset($token);
    unset($url);

    // Check if property "message" exists in the request. If so, the product was not found.
    if (!property_exists($data, "message")) {
        send_product($data, $barcode);
    } else {
        send_product(null, $barcode);
    }
}

function send_product($req_data, $barcode)
{
    $hostname = $_ENV['DB_HOSTNAME'];
    $username = $_ENV['DB_USER'];
    $password = $_ENV['DB_PASS'];
    $database = $_ENV['DB_NAME'];


    $data = [];

    if (!is_null($req_data)){
        // Get the actual data from the object + arrays
        $data = $req_data->data->products[0];
    }

    // Connect to the database
    $db = mysqli_connect($hostname, $username, $password, $database);

    if (!is_null($req_data)) {
        // Check if the barcode already is in the database
        $query = mysqli_query($db, "SELECT barcode FROM products WHERE barcode = '" . $barcode . "'");

        $res = mysqli_fetch_row($query);

        if ($res) {
            // Update the amount
            $result = mysqli_query($db, "UPDATE products SET amount = amount + 1 WHERE barcode = '" . $barcode . "'");
            $response_text = "update";
        } else {
            // Add item to database
            $result = mysqli_query($db, "INSERT INTO `products`(`barcode`, `name`, `brand`,`amount`) VALUES ('" . $barcode . "','" . $data->name . "','" . $data->brand . "',1)");
            $response_text = " added!";
        }
    } else {
        // Add barcode to database, unknown item
        $result = mysqli_query($db, "INSERT INTO `products`(`barcode`,`amount`) VALUES ('" . $barcode . "',1)");
        $response_text = "create";
    }

    // Close the database
    mysqli_close($db);

    // Unset variables
    unset($hostname);
    unset($username);
    unset($password);
    unset($database);

    // If req_data is null, but there is a result -> barcode has been added, but 
    if (is_null($req_data) && $result) {
        response(300, "Item not found. Added barcode to database, but needs user input.");
    } elseif ($result) {
        if ($response_text == "update") {
            response(200, "Item: " . $data->name . "found and updated.");
        } elseif ($response_text == "create") {
            response(201, "Item: " . $data->name . "added.");
        }
    } else {
        response(400, "Data error, product not added.");
    }
}
