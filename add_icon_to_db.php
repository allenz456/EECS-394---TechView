<?php


// CHANGE THIS VALUE TO ENTER DIFFERENT ICONS INTO DATABASE!!!!!
// **********************
$icon_name = "bathroom";
$x_coord = $_REQUEST['x_coord'];
$y_coord = $_REQUEST['y_coord'];
$floor = $_REQUEST['floor'];
// $msg = "Room Name: " . $destination_name . "<br>X coordinate: " . $room_coord_x . "<br>Y coordinate: " . $room_coord_y;

// Open connection to DB
$my_connection = mysql_connect('techview.cx3h6ibh7nag.us-east-1.rds.amazonaws.com', 'eecs394techview', 'showmetech') or die('Could not connect: ' . mysql_error()); // THIS WILL NEED TO CHANGE

// Open database "techview"
$database_name = 'techview';
mysql_select_db($database_name) or die(mysql_error()) ;

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


$msg = "INSERT INTO " . $icon_table_name . " (" . $icon_column1 . ", " . $icon_column2 . ", " . $icon_column3 . ", " . $icon_column4 . ") VALUES ('" . $icon_name . "', '" . $x_coord . "', '" . $y_coord . "', '" . $floor . "')";
mysql_query($msg);


?>

<script language="javascript" type="text/javascript">window.top.window.msg_from_ajax("<?php echo $msg; ?>");</script>   