<?php

// Require common file
require_once 'common.php';

cors();

CheckSetValues(true, true);

// Get barcode + device_id & clean strings
$barcode = clean_string($_GET['barcode']);
$device_id = clean_string($_POST['device_id']);

delete_item($barcode, $device_id);

function delete_item($barcode, $device_id)
{
    $data_error = false;
    $db = new Database();

    // Check if the barcode has more than one amount
    $result = $db->run_query("SELECT * FROM items WHERE device_id =" . $device_id . " AND barcode = '" . $barcode . "' AND quantity > 1", true);

    if ($result) {
        // Decrement quantity
        $result2 = $db->run_query("UPDATE items SET quantity = quantity - 1 WHERE device_id =" . $device_id . " AND barcode = '" . $barcode . "' ", false);

        if ($result2) {
            response(200, "Deleted one amount of item from inventory.");
            exit;
        } else {
            response(400, "Could not decrement quantity of item.");
            exit;
        }
    } else {
        // Check if there is one item left
        $result2 = $db->run_query("SELECT * FROM items WHERE device_id =" . $device_id . " AND barcode = '" . $barcode . "' AND quantity > 0", true);

        if ($result2) {
            $result3 = $db->run_query("DELETE FROM items WHERE barcode =
             '" . $barcode . "' AND device_id = " . $device_id, false);

            if ($result3) {
                response(200, "Deleted last amount of item from inventory!");
            } else {
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
