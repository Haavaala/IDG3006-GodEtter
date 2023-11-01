<?php

// Require common file
require_once './common.php';

// Check for barcode & device_id in the request
CheckSetValues(true, true);

// Retrieve and sanitize strings
$barcode = clean_string($_GET['barcode']);
$device_id = clean_string($_POST['device_id']);

// Run the API request
barcode_req($barcode, $device_id);

// Function for requesting barcode information from an API
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

// Function for sending an item to the database
function send_item($req_data, $barcode, $device_id)
{
    // Initialize the database connection
    $db = new Database();

    // Create initial $item variable with barcode and device_id for queries
    $item = [
        $device_id,
        $barcode
    ];

    // Check if the API data (req_data) is not null
    if (!is_null($req_data)) {
        // Get the actual needed API data
        $data_length = count($req_data->data->products) - 1;

        $data = $req_data->data->products[$data_length];

        $data_allergens = $req_data->data->allergens;

        $allergens = "";
        $weight = -1;

        // 01.11 - Check to see if weight is null, if so fix it for the database
        if (!is_null($data->weight)){
            $weight = $data->weight;
        }

        // Add all allergens from the data table into one string to store
        foreach($data_allergens as $a){
            if ($a->contains == "YES"){
                if ($allergens != ""){
                    $allergens = $allergens + ", " + $a->display_name;
                } else {
                    $allergens = $a->display_name;
                }
            }
        }

        // Check if the barcode already is in the database
        $res = $db->run_item_query("select", $item);

        if ($res->num_rows > 0) {
            // Update the quantity
            $result = $db->run_item_query("update_inc", $item);
            $response_text = "update";
        } else {
            // Add item to database
            // Prepare data array
            $prepared_data = [
                $data->name,
                $data->brand,
                $weight,
                $data->weight_unit,
                $allergens
            ];
            $result = $db->run_item_query("create_full", $item, $prepared_data);
            $response_text = "create";
        }
    } else {
        // Check if the barcode already is in the database
        $res = $db->run_item_query("select", $item);

        if ($res->num_rows > 0) {
            // Update the quantity of the unknown item
            $result = $db->run_item_query("update_inc", $item);
            $response_text = "update";
        } else {
            // Add barcode to database, unknown item
            $result = $db->run_item_query("create_unknown", $item);
            $response_text = "create";
        }
    }

    if (is_null($req_data) && $result) {
        // If req_data is null, but there is a result -> barcode has been added, but needs user input
        

        if ($response_text == "update") {
            response(300, "Updated quantity of unknown item.");
        } elseif ($response_text == "create") {
            response(300, "Item not found. Added barcode to device inventory, but needs user input.");
        }
    } elseif ($result) {
        // If req_data is ok and there is a result, send response based on whether the item was updated or created.
        if ($response_text == "update") {
            response(200, "Item: " . $data->name . " found in device inventory! Updated quantity.");
        } elseif ($response_text == "create") {
            response(201, "Item: " . $data->name . " added.");
        }
    } else {
        log_error("User DeviceID:" . $device_id . " tried to add item: " . $barcode . " to the database, but failed.", false);
        response(400, "Data error, item not added.");
    }
}
