<?php

$my_connection = mysql_connect('techview.cx3h6ibh7nag.us-east-1.rds.amazonaws.com', 'eecs394techview', 'showmetech') or die('Could not connect: ' . mysql_error());

// Create Database
$database_name = 'techview';
mysql_query('CREATE DATABASE ' . $database_name);

// Open database "techview"
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


// Column info for directions
$direction_table_name = 'directions';
$direction_column1 = 'destination';
	$direction_column1_type = 'varchar(100)';
$direction_column2 = 'number_of_steps';
	$direction_column2_type = 'int(20)';
$direction_column3 = 'turn_coord_x';
	$direction_column3_type = 'int(11)';
$direction_column4 = 'turn_coord_y';
	$direction_column4_type = 'int(11)';
$direction_column5 = 'step_number';
	$direction_column5_type = 'int(20)';
$direction_column6 = 'step_direction';
	$direction_column6_type = 'varchar(2000)';
$direction_column7 = 'other_info';
	$direction_column7_type = 'varchar(255)';

// Column info for icons
$icon_table_name = 'icons';
$icon_column1 = 'icon_name';
	$icon_column1_type = 'varchar(50)';
$icon_column2 = 'x_coord';
	$icon_column2_type = 'int(11)';
$icon_column3 = 'y_coord';
	$icon_column3_type = 'int(11)';
$icon_column4 = 'floor';
	$icon_column4_type = 'int(11)';
$icon_column5 = 'other_info';
	$icon_column5_type = 'varchar(255)';

// Create the room table
mysql_query('CREATE TABLE ' . $room_table_name . '(
' . $room_column1 . ' ' . $room_column1_type . ', 
' . $room_column2 . ' ' . $room_column2_type . ', 
' . $room_column3 . ' ' . $room_column3_type . ', 
' . $room_column4 . ' ' . $room_column4_type . ',
' . $room_column5 . ' ' . $room_column5_type . ',
' . $room_column6 . ' ' . $room_column6_type . ')');

// Create the direction table
mysql_query('CREATE TABLE ' . $direction_table_name . '(
' . $direction_column1 . ' ' . $direction_column1_type . ', 
' . $direction_column2 . ' ' . $direction_column2_type . ', 
' . $direction_column3 . ' ' . $direction_column3_type . ', 
' . $direction_column4 . ' ' . $direction_column4_type . ',
' . $direction_column5 . ' ' . $direction_column5_type . ',
' . $direction_column6 . ' ' . $direction_column6_type . ',
' . $direction_column7 . ' ' . $direction_column7_type . ')');


// Create the icon table
mysql_query('CREATE TABLE ' . $icon_table_name . '(
' . $icon_column1 . ' ' . $icon_column1_type . ', 
' . $icon_column2 . ' ' . $icon_column2_type . ', 
' . $icon_column3 . ' ' . $icon_column3_type . ', 
' . $icon_column4 . ' ' . $icon_column4_type . ',
' . $icon_column5 . ' ' . $icon_column5_type . ')');

	echo 'hi';


?>