<?php

// Require common file
require_once './common.php';

// Check for barcode & device_id in the request
CheckSetValues(true, true, true);

// Retrieve and sanitize strings
$barcode = clean_string($_GET['barcode']);
$device_id = clean_string($_POST['device_id']);
$datestamp = clean_string($_POST['datestamp']);

$name = clean_string($_POST['name']);
$brand = clean_string($_POST['brand']);
$weight = clean_string($_POST['weight']);
$weight_unit = clean_string($_POST['weight_unit']);
$allergens = clean_string($_POST['allergens']);
$category = clean_string($_POST['category_id']);
$date_bestbefore = clean_string($_POST['date_bestbefore']);

// Initialize the database connection
$db = new Database();

// Create initial $item variable with barcode and device_id for queries
$item = [
    $name,
    $brand,
    $weight,
    $weight_unit,
    $allergens,
    $category,
    $date_bestbefore,
    $device_id,
    $barcode,
    $datestamp
];

// Check if the barcode is in the inventory
$result = $db->run_item_query("edit", $item);

// Verify that the result succeeded
if (!$result) {
    log_error("User DeviceID:" . $device_id . " tried to edit item in database: " . $barcode . ", but failed!", false);
    response(400, "Error when trying to edit item.");
    exit;
} else {
    response(200, "Updated item info in database!");
    exit;
}
