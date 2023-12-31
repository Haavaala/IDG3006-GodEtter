<?php

// Require common file
require_once './common.php';

// Check for barcode & device_id in the request
CheckSetValues(true, true, true);

// Retrieve and sanitize strings
$barcode = clean_string($_GET['barcode']);
$device_id = clean_string($_POST['device_id']);
$datestamp = clean_string($_POST['datestamp']);

// Run the delete request
delete_item($barcode, $device_id, $datestamp);

// Function to delete an item from the database
function delete_item($barcode, $device_id, $datestamp)
{

    // Initialize the database connection
    $db = new Database();

    // Create initial $item variable with barcode, device_id & date added (datestamp) for queries
    $item = [
        $device_id,
        $barcode,
        $datestamp
    ];

    $res = $db->run_item_query("delete", $item);

    if ($res) {
        response(200, "Deleted item from inventory!");
        exit;
    } else {
        log_error("User DeviceID:" . $device_id . " tried to delete item from database: " . $barcode . ", ". $datestamp .", but failed!", false);
        response(400, "Error when trying to delete item.");
        exit;
    }
}
