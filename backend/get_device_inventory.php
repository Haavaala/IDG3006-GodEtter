<?php

// Require common file
require_once 'common.php';

cors();

CheckSetValues(false, true);

$device_id = clean_string($_POST['device_id']);

$db = new Database();

$result = $db->run_query("SELECT * FROM items WHERE device_id = '" . $device_id . "'", false);

while ($row = mysqli_fetch_assoc($result)) {
    $data[] = $row;
};

// Check if there are entries, and return data
if ($data) {
    response(200, $data);
} else {
    response(400, "Data not found");
}
