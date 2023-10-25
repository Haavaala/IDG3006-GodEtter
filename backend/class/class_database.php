<?php

// Database class
class Database
{
    // Static variable "con" for the connection
    protected static $con;

    public function __construct()
    {
        // Get credentials
        $hostname = $_ENV['DB_HOSTNAME'];
        $username = $_ENV['DB_USER'];
        $password = $_ENV['DB_PASS'];
        $database = $_ENV['DB_NAME'];

        // Open a new sql connection
        $this::$con = new mysqli($hostname, $username, $password, $database);

        // Check if the connection was created
        if (!$this::$con) {
            log_error("User tried to connect to database, but the connection was not created!", false);
            response(500, "Server error");
            exit;
        }

        // Check if the connection succeded
        if ($this::$con->connect_error) {
            log_error("User tried to connect to database, but the connection could not be established." . mysqli_error($this::$con), false);
            response(500, "Server error");
            exit;
        }

        // Unset credentials
        unset($hostname);
        unset($username);
        unset($password);
        unset($database);
    }

    public function __destruct()
    {
        $this->disconnect();
    }

    // Method for disconnecting from a database
    protected function disconnect()
    {
        // Check if the connection is still alive, if so - close it.
        if (is_resource($this::$con) && get_resource_type($this::$con) === 'mysql link') {
            $this::$con->close();
        }
    }

    // Method for sanitizing input + real escape string
    protected function clean_string($var)
    {
        $invalid_characters = array("&", "$", "%", "#", "<", ">", "|");
        $var = htmlentities($var);
        $var = strip_tags($var);
        $var = stripslashes($var);
        $var = str_replace($invalid_characters, "", $var);
        $var = mysqli_real_escape_string($this::$con, $var);
        return $var;
    }

    // Method for running a database query on the items
    public function run_item_query($type, $item, $data = [])
    {
        // Initialize variables
        $query = "";
        $param = "";

        // Check what type of item query is requested, set SQL query strings and bind params based on this.
        switch ($type) {
                // Query for selecting items
            case "select":
                $query = "SELECT barcode, quantity FROM items WHERE device_id = ? AND barcode = ?";
                $param = "is";
                break;
                // Query for creating item with full data
            case "create_full":
                $query = "INSERT INTO `items`(`device_id`, `barcode`, `name`, `brand`,`quantity`) VALUES (?, ?, ?, ?, 1)";
                $param = "isss";
                break;
                // Query for creating item with barcode only
            case "create_unknown":
                $query = "INSERT INTO `items`(`device_id`, `barcode`, `quantity`) VALUES (?, ?, 1)";
                $param = "is";
                break;
                // Query for deleting items
            case "delete":
                $query = "DELETE FROM items WHERE device_id = ? AND barcode = ?";
                $param = "is";
                break;
                // Query for updating an item by increasing the quantity
            case "update_inc":
                $query = "UPDATE items SET quantity = quantity + 1 WHERE device_id = ? AND barcode = ?";
                $param = "is";
                break;
                // Query for updating an item by decreasing the quantity
            case "update_dec":
                $query = "UPDATE items SET quantity = quantity - 1 WHERE device_id = ? AND barcode = ?";
                $param = "is";
                break;
        }

        // If data is submitted, merge the arrays as one
        if (count($data) > 0) {
            $item = array_merge($item, $data);
        }

        // Prepare the statement
        $statement = $this::$con->prepare($query);

        // Bind the params and the array with the data to the statement
        $statement->bind_param($param, ...$item);

        // Execute the statement
        if (!$statement->execute()) {
            // If the statement failed to execute, log the error and send response to user
            log_error($statement->error, true);
            response(400, "Server error");
            exit;
        }

        // Based on what type was originally selected, either select the result or the affected rows to return later.
        if ($type == "select") {
            $result = $statement->get_result();
        } else {
            $result = $statement->affected_rows;
        }

        // Close the statement
        $statement->close();

        // Return the selected result
        return $result;
    }

    // Method for getting the full inventory from the database
    public function run_get_inventory($device_id)
    {
        // Query to get all items from one device's inventory
        $query = "SELECT barcode, name, brand, quantity, date from items WHERE device_id = ?";

        // Prepare the statement
        $statement = $this::$con->prepare($query);

        // Bind the param for one INT variable, the device id
        $statement->bind_param("i", $device_id);

        // Execute the statement
        if (!$statement->execute()) {
            // If the statement failed to execute, log the error and send response to user
            log_error($statement->error, true);
            response(400, "Server error");
            exit;
        }

        // Get the result from the query
        $result = $statement->get_result();

        // Close the statement
        $statement->close();

        // Return the result
        return $result;
    }
}
