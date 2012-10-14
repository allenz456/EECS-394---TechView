<?php


echo 'hi';
$room_name = $_REQUEST['room_name'];
$room_coord_x = $_REQUEST['room_coord_x'];
$room_coord_y = $_REQUEST['room_coord_y']; 
$msg = "Room Name: " . $room_name . "<br>X coordinate: " . $room_coord_x . "<br>Y coordinate: " . $room_coord_y;

$my_connection = mysql_connect('techview.cyj1bgdmdvpz.us-east-1.rds.amazonaws.com', 'eecs394techview', 'password') or die('Could not connect: ' . mysql_error()); // THIS WILL NEED TO CHANGE


?>

<script language="javascript" type="text/javascript">window.top.window.msg_from_ajax("<?php echo $msg; ?>");</script>   