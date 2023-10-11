<?php

// Require common file
require_once __DIR__ . '/common.php';

$hostname = $_ENV['DB_HOSTNAME'];
$username = $_ENV['DB_USER'];
$password = $_ENV['DB_PASS'];
$database = $_ENV['DB_NAME'];


$db = mysqli_connect($hostname,$username,$password,$database);
$result = mysqli_query($db, "SELECT * FROM venner");
$row = mysqli_fetch_row($result);

if (count($row) > 0){
    // Return data
    
} else {
    response(400,"Data not found");
}