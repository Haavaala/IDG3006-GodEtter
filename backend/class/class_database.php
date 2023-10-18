<?php

// Database class
class Database
{

    protected static $con;

    public function __construct()
    {
        // Connect to the database
        $hostname = $_ENV['DB_HOSTNAME'];
        $username = $_ENV['DB_USER'];
        $password = $_ENV['DB_PASS'];
        $database = $_ENV['DB_NAME'];

        $this::$con = new mysqli($hostname, $username, $password, $database);

        // Check if the database connection worked
        if (!$this::$con) {
            response(500, "Server error");
        }

        if ($this::$con->connect_error) {
            response(500, "Could not connect to the database! " . mysqli_error($this::$con));
        }

        unset($hostname);
        unset($username);
        unset($password);
        unset($database);
    }

    public function __destruct()
    {
        $this->disconnect();
    }

    protected function disconnect()
    {
        // Disconnect the database connection
        if (is_resource($this::$con) && get_resource_type($this::$con) === 'mysql link') {
            $this::$con->close();
        }
    }

    // Function for sanitizing input
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
    
    public function run_query($query, $fetch_rows)
    {
        $res = $this::$con->query($query);

        if ($fetch_rows) {
            $result = mysqli_fetch_row($res);
        } else {
            $result = $res;
        }

        if (!$res) {
            response(500, $this::$con->error);
            $this->disconnect();
            exit;
        } else {
            return $result;
        }
    }
}
