<?php

// Require common file
require_once '../common.php';

// Fix cors headers
cors();

// Check for device_id in the request
CheckSetValues(false, true);

// Retrieve and sanitize strings
$device_id = clean_string($_POST['device_id']);

// Initialize database
$db = new Database();

// Run the query
$result = $db->run_query("SELECT * FROM items WHERE device_id = '" . $device_id . "'", false);

// While loop on the array (to display the whole inventory as an array with objects)
while ($row = mysqli_fetch_assoc($result)) {
    $data[] = $row;
};

// Check if there are entries, and return data
if ($data) {
    response(200, $data);
} else {
    log_error("User DeviceID: " . $device_id . " tried to get the whole inventory, but failed!",false);
    response(400, "Data not found");
}
