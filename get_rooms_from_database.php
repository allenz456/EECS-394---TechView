<?php

// Open connection to DB
$my_connection = mysql_connect('techview.cx3h6ibh7nag.us-east-1.rds.amazonaws.com', 'eecs394techview', 'showmetech') or die('Could not connect: ' . mysql_error()); // THIS WILL NEED TO CHANGE

// Open database "techview"
$database_name = 'techview';
mysql_select_db($database_name) or die(mysql_error()) ;

// Column info for room_labels
$room_table_name = 'room_labels';
$room_column1 = 'room_name';
	$room_column1_type = 'varchar(50)';
$room_column2 = 'room_coord_x';
	$room_column2_type = 'int(11)';
$room_column3 = 'room_coord_y';
	$room_column3_type = 'int(11)';
$room_column4 = 'floor';
	$room_column4_type = 'int(3)';
$room_column5 = 'db_room_id';
	$room_column5_type = 'INT NOT NULL AUTO_INCREMENT, PRIMARY KEY (' . $room_column5 . ')';
$room_column6 = 'other_info';
	$room_column6_type = 'varchar(255)';

$room_data_array = array();
$room_data_query = mysql_query("SELECT * FROM " . $room_table_name);
while($room_data_hold = mysql_fetch_array($room_data_query))
{
	array_push($room_data_array, $room_data_hold);
}

$room_data_json = json_encode($room_data_array);

echo $room_data_json;

?>