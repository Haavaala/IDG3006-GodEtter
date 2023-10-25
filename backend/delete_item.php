<?php

// Require common file
require_once './common.php';

// Check for barcode & device_id in the request
CheckSetValues(true, true);

// Retrieve and sanitize strings
$barcode = clean_string($_GET['barcode']);
$device_id = clean_string($_POST['device_id']);

// Run the delete request
delete_item($barcode, $device_id);

// Function to delete an item from the database
function delete_item($barcode, $device_id)
{

    // Initialize the database connection
    $db = new Database();

    // Create initial $item variable with barcode and device_id for queries
    $item = [
        $device_id,
        $barcode
    ];

    // Check if the barcode is in the inventory
    $result = $db->run_item_query("select", $item);
    // Fetch the associative array
    $result = $result->fetch_assoc();

    // Verify that the result succeeded
    if (!$result) {
        log_error("User DeviceID:" . $device_id . " tried to delete item from database: " . $barcode . ", but failed!", false);
        response(400, "Error when trying to delete item.");
        exit;
    }

    if ($result['quantity'] > 1) {
        // Decrement quantity from the inventory
        $res = $db->run_item_query("update_dec", $item);

        if ($res) {
            response(200, "Deleted one amount of item from inventory.");
            exit;
        } else {
            log_error("User DeviceID:" . $device_id . " tried to decrement quantity of item: " . $barcode . ", but failed!", false);
            response(400, "Could not decrement quantity of item.");
            exit;
        }
    } elseif ($result['quantity'] <= 1) {
        $res = $db->run_item_query("delete", $item);

        if ($res) {
            response(200, "Deleted last amount of item from inventory!");
            exit;
        }
    } else {
        log_error("User DeviceID:" . $device_id . " tried to delete item from database: " . $barcode . ", but failed!", false);
        response(400, "Error when trying to delete item.");
        exit;
    }
}
