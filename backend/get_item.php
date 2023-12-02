<?php

// Require common file
require_once './common.php';

// Check for barcode & device_id in the request
CheckSetValues(true, true, true);

// Retrieve and sanitize strings
$barcode = clean_string($_GET['barcode']);
$device_id = clean_string($_POST['device_id']);
$datestamp = clean_string($_POST['datestamp']);

// Run the get request
get_item($barcode, $device_id, $datestamp);

// Function to get an item from the database
function get_item($barcode, $device_id, $datestamp)
{

    // Initialize the database connection
    $db = new Database();

    // Create initial $item variable with barcode, device_id & date added (datestamp) for queries
    $item = [
        $device_id,
        $barcode,
        $datestamp
    ];

    $res = $db->run_item_query("select_one", $item);

    $data = [];

    while ($row = mysqli_fetch_assoc($res)) {
        $data[] = $row;
    };

    // Fix 02.12, make sure data has more than 0 items
    if (count($data) > 0) {
        response(200, $data);
        exit;
    } else {
        log_error("User DeviceID:" . $device_id . " tried to get item from database: " . $barcode . ", ". $datestamp .", but failed!", false);
        response(400, "Error when trying to get item.");
        exit;
    }
}
