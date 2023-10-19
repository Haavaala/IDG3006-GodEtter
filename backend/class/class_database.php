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
            log_error("User tried to connect to database, but the connection was not created!",false);
            response(500, "Server error");
            exit;
        }

        // Check if the connection succeded
        if ($this::$con->connect_error) {
            log_error("User tried to connect to database, but the connection could not be established." . mysqli_error($this::$con),false);
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
    
    // Method for running a query on the database
    public function run_query($query, $fetch_rows)
    {
        // Run the query
        $res = $this::$con->query($query);

        // If the query did not succeed, log the error with user data to keep track incase of a "malicious" query
        if (!$res) {
            log_error(" tried running query: \"" . $query . "\" on database, but failed. Database error: \"". $this::$con->error . "\"",true);
            response(500, "Server error");
            exit;
        }

        // If fetch_rows is set to true, fetch the rows from the retrieved data
        if ($fetch_rows) {
            $result = mysqli_fetch_row($res);
        } else {
            $result = $res;
        }

        // Return the result
        return $result;
    }
}
