<?php


$room_name = $_REQUEST['room_name'];
$room_coord_x = $_REQUEST['room_coord_x'];
$room_coord_y = $_REQUEST['room_coord_y'];
$floor = $_REQUEST['floor'];
$msg = "Room Name: " . $room_name . "<br>X coordinate: " . $room_coord_x . "<br>Y coordinate: " . $room_coord_y;

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


mysql_query("INSERT INTO " . $room_table_name . " (" . $room_column1 . ", " . $room_column2 . ", " . $room_column3 . ", " . $room_column4 . ") VALUES ('" . $room_name . "', '" . $room_coord_x . "', '" . $room_coord_y . "', '" . $floor . "')");


?>

<script language="javascript" type="text/javascript">window.top.window.msg_from_ajax("<?php echo $msg; ?>");</script>   