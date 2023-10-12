<?php

// Require common file
require_once __DIR__ . '/common.php';

cors();

$hostname = $_ENV['DB_HOSTNAME'];
$username = $_ENV['DB_USER'];
$password = $_ENV['DB_PASS'];
$database = $_ENV['DB_NAME'];

// Connect to the database
$db = mysqli_connect($hostname, $username, $password, $database);

// Run the query
$result = mysqli_query($db, "SELECT * FROM products");

while ($row = mysqli_fetch_assoc($result)){
    $data[] = $row;
};



// Close the database
mysqli_close($db);

// Unset variables
unset($hostname);
unset($username);
unset($password);
unset($database);


// Check if there are entries, and return data
if ($data) {
    response(200, $data);
} else {
    response(400, "Data not found");
}
