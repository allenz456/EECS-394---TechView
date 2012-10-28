<?php

// Open connection to DB
$my_connection = mysql_connect('techview.cx3h6ibh7nag.us-east-1.rds.amazonaws.com', 'eecs394techview', 'showmetech') or die('Could not connect: ' . mysql_error()); // THIS WILL NEED TO CHANGE

// Open database "techview"
$database_name = 'techview';
mysql_select_db($database_name) or die(mysql_error()) ;

$table_name='directions';

$directions_data_array = array();
$directions_data_query = mysql_query("SELECT * FROM " . $table_name);
while($directions_data_hold = mysql_fetch_array($directions_data_query))
{
	array_push($directions_data_array, $directions_data_hold);
}

$directions_data_json = json_encode($directions_data_array);

echo $directions_data_json;

?>