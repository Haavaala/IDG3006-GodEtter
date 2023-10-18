<?php

// Require common file
require_once 'common.php';

cors();

CheckSetValues(true, true);

// Get barcode + device_id & clean strings
$barcode = clean_string($_GET['barcode']);
$device_id = clean_string($_POST['device_id']);

// Run the API request
barcode_req($barcode, $device_id);

function barcode_req($barcode, $device_id)
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

    // Check if property "message" exists in the request. If so, the item was not found.
    if (!property_exists($data, "message")) {
        send_item($data, $barcode, $device_id);
    } else {
        send_item(null, $barcode, $device_id);
    }
}

function send_item($req_data, $barcode, $device_id)
{
    $db = new Database();

    if (!is_null($req_data)) {
        // Get the actual data from the object + arrays
        $data = $req_data->data->products[0];
    }
    if (!is_null($req_data)) {
        // Check if the barcode already is in the database
        $res = $db->run_query("SELECT barcode FROM items WHERE barcode = '" . $barcode . "'", true);

        if ($res) {
            // Update the quantity
            $result = $db->run_query("UPDATE items SET quantity = quantity + 1 WHERE barcode = '" . $barcode . "' AND device_id = " . $device_id, false);
            $response_text = "update";
        } else {
            // Add item to database
            $result = $db->run_query("INSERT INTO `items`(`barcode`, `name`, `brand`,`quantity`, `device_id`) VALUES ('" . $barcode . "','" . $data->name . "','" . $data->brand . "',1," . $device_id . ")", false);
            $response_text = "create";
        }
    } else {
        // Add barcode to database, unknown item
        $result = $db->run_query("INSERT INTO `items`(`barcode`,`quantity`,`device_id`) VALUES ('" . $barcode . "',1, " . $device_id . ")", false);
    }

    // If req_data is null, but there is a result -> barcode has been added, but
    if (is_null($req_data) && $result) {
        response(300, "Item not found. Added barcode to device inventory, but needs user input.");
    } elseif ($result) {
        if ($response_text == "update") {
            response(200, "Item: " . $data->name . " found in device inventory! Updated quantity.");
        } elseif ($response_text == "create") {
            response(201, "Item: " . $data->name . " added.");
        }
    } else {
        response(400, "Data error, item not added.");
    }
}
