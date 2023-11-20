<?php

// Require common file
require_once './common.php';

// Check for barcode & device_id in the request
CheckSetValues(true, true);

// Retrieve and sanitize strings
$barcode = clean_string($_GET['barcode']);
$device_id = clean_string($_POST['device_id']);

// Run the API request
barcode_req($barcode, $device_id);

// Function for requesting barcode information from an API
function barcode_req($barcode, $device_id)
{
    // Get the API token key
    $token = $_ENV['API_KEY'];

    // Combine the API_URL and the barcode to get a full request url
    $url = $_ENV['API_URL'] . $barcode;

    // Setup the request
    $connection = curl_init($url);

    // Returns the data/output as a string instead of raw data
    curl_setopt($connection, CURLOPT_RETURNTRANSFER, true);

    // Set auth headers
    curl_setopt($connection, CURLOPT_HTTPHEADER, array(
        'Content-Type: application/json',
        'Authorization: Bearer ' . $token
    ));

    // Get stringified data.
    $data = curl_exec($connection);

    // Close the connection
    curl_close($connection);

    // Decode the data from json
    $data = json_decode($data);

    // Unset variables
    unset($token);
    unset($url);

    // Check if property "message" exists in the request. If so, the item was not found.
    if (!is_null($data)){
        if (!property_exists($data, "message")) {
            send_item($data, $barcode, $device_id);
        } else {
            send_item(null, $barcode, $device_id);
        }
    } else {
        log_error("Tried to get data for an item, but data returned null.",false);
        response(500,"Server error");
    }
    
}

// Function for sending an item to the database
function send_item($req_data, $barcode, $device_id)
{
    // Initialize the database connection
    $db = new Database();

    // Create initial $item variable with barcode and device_id for queries
    $item = [
        $device_id,
        $barcode
    ];

    // Check if the API data (req_data) is not null
    if (!is_null($req_data)) {
        // Get the actual needed API data
        // Use the last item in the array, as it is the information about the product itself
        // from the product db, and not any store.
        //$data_length = count($req_data->data->products) - 1;
        // ! Use the first store instead for now, as the last ones do not have categories for some reason..
        $data = $req_data->data->products[0];


        // * ---- Find allergens

        $data_allergens = $req_data->data->allergens;
        $allergens = "";

        // Add all allergens from the data table into one string to store
        foreach($data_allergens as $a){
            if ($a->contains == "YES"){
                if ($allergens != ""){
                    $allergens = $allergens + ", " + $a->display_name;
                } else {
                    $allergens = $a->display_name;
                }
            }
        }

        // * ---- Find & parse category

        // Find the category, parse the string and reformat it to our liking
        $data_categories = $data->category;
        $temp_category = "";

        // Find the lowest depth in the category array to get the top category
        $lowestDepthItem = null;

        foreach ($data_categories as $i) {
            if ($lowestDepthItem === null || $i->depth < $lowestDepthItem->depth) {
                $lowestDepthItem = $i;
            }
        }

        if ($lowestDepthItem !== null) {
           // echo "Lowest depth item found: " . $lowestDepthItem->name;
            $to_parse = $lowestDepthItem->name;
        } else {
            //echo "Failed to find lowest depth item.";
            $to_parse = "";
        }

        // parse the category
        $category = parse_category($to_parse);

        // Add a default best before date

        // Get the current date and time
        $currentDateTime = new DateTime();

        if ($category == 9) {
             // Add 1 week to the current date and time for meat category
            $currentDateTime->add(new DateInterval('P1W'));
        } else {
            // Add 2 week to the current date and time for everything else
            $currentDateTime->add(new DateInterval('P2W'));
        }

        // Format the result as a string & store it
        $bestbefore = $currentDateTime->format('Y-m-d H:i:s');

        // * ---- Query

        // ? Removed quantity code as we are not using that system anymore
        // Check if the barcode already is in the database
        // $res = $db->run_item_query("select", $item);
        // if ($res->num_rows > 0) {
        //     // Update the quantity
        //     $result = $db->run_item_query("update_inc", $item);
        //     $response_text = "update";
        // } else {


        // Add item to database
        // Prepare data array
        $prepared_data = [
            $data->name,
            $data->brand,
            $data->weight,
            $data->weight_unit,
            $allergens,
            $category,
            $bestbefore
        ];

        $result = $db->run_item_query("create_full", $item, $prepared_data);
        $response_text = "create";


        // }
    } else {
        // Check if the barcode already is in the database
        $res = $db->run_item_query("select", $item);

        // ? Removed quantity code
        // if ($res->num_rows > 0) {
        //     // Update the quantity of the unknown item
        //     $result = $db->run_item_query("update_inc", $item);
        //     $response_text = "update";
        // } else {
            // Add barcode to database, unknown item
            $result = $db->run_item_query("create_unknown", $item);
            $response_text = "create";
        // }
    }

    if (is_null($req_data) && $result) {
        // If req_data is null, but there is a result -> barcode has been added, but needs user input
        

        if ($response_text == "update") {
            response(300, "Updated quantity of unknown item.");
        } elseif ($response_text == "create") {
            response(300, "Item not found. Added barcode to device inventory, but needs user input.");
        }
    } elseif ($result) {
        // If req_data is ok and there is a result, send response based on whether the item was updated or created.
        if ($response_text == "update") {
            response(200, "Item: " . $data->name . " found in device inventory! Updated quantity.");
        } elseif ($response_text == "create") {
            response(201, "Item: " . $data->name . " added.");
        }
    } else {
        log_error("User DeviceID:" . $device_id . " tried to add item: " . $barcode . " to the database, but failed.", false);
        response(400, "Data error, item not added.");
    }
}

// Function for parsing category
function parse_category($cat){

    //echo "Parsing " . $cat;

    // Uncategorized
    if ($cat == ""){
        return 1;
    }

    switch(true){
        case (str_contains($cat, "Bakeri") || str_contains($cat, "Bakevarer")):
            return 2; // Bakevarer og kjeks
        
        case(str_contains($cat, "Barneprodukter")):
            return 3; // Barneprodukter
        
        case(str_contains($cat, "Dessert") || str_contains($cat, "iskrem")):
            return 4; // Dessert
                
        case(str_contains($cat, "Drikke")):
            return 5; // Drikke

        case(str_contains($cat, "Dyr")):
            return 6; // Dyrevarer
        
        case(str_contains($cat, "Fisk") || str_contains($cat, "skalldyr")):
            return 7; // Fisk og skalldyr
                
        case(str_contains($cat, "Frukt") || str_contains($cat, "grønt")):
            return 8; // Frukt og grønt

        case(str_contains($cat, "Kjøtt") || str_contains($cat, "Kylling") || str_contains($cat, "fjærkre")):
            return 9; // Kjøtt
        
        case(str_contains($cat, "Meieri") || str_contains($cat, "egg") || str_contains($cat, "Ost")):
            return 10; // Meieri og egg
                
        case(str_contains($cat, "Pålegg") || str_contains($cat, "frokost")):
            return 11; // Pålegg

        case(str_contains($cat, "Snacks") || str_contains($cat, "godteri")):
            return 12; // Snacks og godteri
    }


    // if it could not find the category / something else, set the category to 1
    return 1; // Ukategorisert
}