<?php

// Require common file
require_once __DIR__ . '/common.php';

if (!isset($_ENV['API_KEY'])) {
    // Check if API key is set
    response(400,"API key not set");
    exit;
}

if (!isset($_ENV['API_URL'])) {
    // Check if API url is set
    response(400,"API url not set");
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
    response(400,"Barcode not set",NULL);
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

    if (count($data->data->products) > 0){
        response(200,return_product($data));
    } else {
        response(400,"Product not found");
    }
    
}

function return_product($req_data)
{
    $product = $req_data->data->products[0];

    $formatted['name'] = $product->name;
    $formatted['brand'] = $product->brand;
    $formatted['description'] = $product->description;
    $formatted['image'] = $product->image;

    return $formatted;
}