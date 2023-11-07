<?php

// Require common file
require_once './common.php';

// Check for device_id in the request
CheckSetValues(false, true);

$cat_req = false;
$category = 1;

// Check if category is set in the GET
if (isset($_GET["category"])){
    $category = clean_string($_GET['category']);
    $cat_req = true;
}

// Retrieve and sanitize strings
$device_id = clean_string($_POST['device_id']);

// Initialize database
$db = new Database();

if ($cat_req){
    // Run the category based query
    $result = $db->run_get_inventory($device_id, $category);
} else {
    // Run the normal query
    $result = $db->run_get_inventory($device_id, false);
}

// While loop on the array (to display the whole inventory as an array with objects)
while ($row = mysqli_fetch_assoc($result)) {
    $data[] = $row;
};

// Check if there are entries, and return data
if (isset($data)) {
    response(200, $data);
} else {
    log_error("User DeviceID: " . $device_id . " tried to get the whole inventory, but failed!", false);
    response(400, "Data not found");
}
