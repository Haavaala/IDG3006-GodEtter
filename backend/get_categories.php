<?php

// Require common file
require_once './common.php';

// This route does not need barcode or device_id
CheckSetValues(false, false);

// Retrieve and sanitize strings

// Initialize database
$db = new Database();

// Run the query
$result = $db->run_get_categories();

// While loop on the array (to display the whole inventory as an array with objects)
while ($row = mysqli_fetch_assoc($result)) {
    $data[] = $row;
};

// Check if there are entries, and return data
if (isset($data)) {
    response(200, $data);
} else {
    log_error("Tried to request all categories, but failed!", false);
    response(400, "Data not found");
}
