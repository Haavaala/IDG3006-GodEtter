<?php

// Require common file
require_once '../common.php';

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
    // Set data_error variable to false at start
    $data_error = false;

    // Initialize the database connection
    $db = new Database();

    // Check if the barcode has more than one amount
    $result = $db->run_query("SELECT * FROM items WHERE device_id =" . $device_id . " AND barcode = '" . $barcode . "' AND quantity > 1", true);

    if ($result) {
        // Decrement quantity from the inventory
        $result2 = $db->run_query("UPDATE items SET quantity = quantity - 1 WHERE device_id =" . $device_id . " AND barcode = '" . $barcode . "' ", false);

        if ($result2) {
            response(200, "Deleted one amount of item from inventory.");
            exit;
        } else {
            log_error("User DeviceID:" . $device_id . " tried to decrement quantity of item: " . $barcode . ", but failed!",false);
            response(400, "Could not decrement quantity of item.");
            exit;
        }
    } else {
        // Check if there is one item left, if so delete the item entirely from the database
        $result2 = $db->run_query("SELECT * FROM items WHERE device_id =" . $device_id . " AND barcode = '" . $barcode . "' AND quantity > 0", true);

        if ($result2) {
            $result3 = $db->run_query("DELETE FROM items WHERE barcode =
             '" . $barcode . "' AND device_id = " . $device_id, false);

            if ($result3) {
                response(200, "Deleted last amount of item from inventory!");
            } else {
                log_error("User DeviceID:" . $device_id . " tried to delete item from database: " . $barcode . ", but failed!",false);
                response(400, "Error when trying to delete item.");
            }

            exit;
        } else {
            response(400, "Item not found!");
            exit;
        }
    }

    if ($data_error) {
    }
}
