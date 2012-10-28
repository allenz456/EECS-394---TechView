<?php


$destination_name = $_REQUEST['destination_name'];
$direction_text = $_REQUEST['direction_text'];
$step_number = $_REQUEST['step_number'];
$total_step_number = $_REQUEST['total_step_count'];
$direction_coord_x = $_REQUEST['direction_coord_x'];
$direction_coord_y = $_REQUEST['direction_coord_y'];
$floor = $_REQUEST['floor'];
// $msg = "Room Name: " . $destination_name . "<br>X coordinate: " . $room_coord_x . "<br>Y coordinate: " . $room_coord_y;

// Open connection to DB
$my_connection = mysql_connect('techview.cx3h6ibh7nag.us-east-1.rds.amazonaws.com', 'eecs394techview', 'showmetech') or die('Could not connect: ' . mysql_error()); // THIS WILL NEED TO CHANGE

// Open database "techview"
$database_name = 'techview';
mysql_select_db($database_name) or die(mysql_error()) ;

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


$msg = "INSERT INTO " . $direction_table_name . " (" . $direction_column1 . ", " . $direction_column2 . ", " . $direction_column3 . ", " . $direction_column4 . ", " . $direction_column5 . ", " . $direction_column6 . ", " . $direction_column7 . ") VALUES ('" . $destination_name . "', '" . $total_step_number . "', '" . $direction_coord_x . "', '" . $direction_coord_y . "', '" . $step_number . "', '" . $direction_text . "', '" . $floor . "')";
mysql_query($msg);

?>

<script language="javascript" type="text/javascript">window.top.window.msg_from_ajax("<?php echo $msg; ?>");</script>   