<!DOCTYPE HTML>
<html>
<head>
	<title>TechView</title>

<!-- CSS FILE -->
<link type="text/css" rel="stylesheet" href="main.css">
<!-- JAVASCRIPT FILE -->
<script type="text/javascript" src="main.js"></script>

<!-- JQuery Mobile -->
<link rel="stylesheet" href="jquery_mobile/jquery.mobile-1.2.0.css" />
<!-- <script src="http://code.jquery.com/jquery-1.8.2.min.js"></script> -->
<script src="jquery_mobile/jquery.js"></script>
<script src="jquery_mobile/jquery.mobile-1.2.0.js"></script>


<!-- <meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable:no;"> -->

</head>
<body id='body_div'>
<div data-role="page">

<!-- HEADER -->
<div data-role="header" id='title'>Welcome to TechView!</div><!-- /header -->

<!-- HOME BUTTON -->
<!-- <div class='home_button' data-role="button" onclick='load_home(); hide_label_containers()' id='home_button'>Home</div> -->

<div id='test'></div>
<!-- lable_container includes a list of divs that will be filled depending on the needs of the user -->
<div id='label_container'>
	<div id='room_label_container'></div>
	<div id='room_label_form'></div>
</div>

<!-- SELECT BUTTONS -->
<span id='select_floor'>
	<!-- <div data-role="content">Select a floor:</div>
	<div data-role="controlgroup">
		<div class='floor_button' data-role="button" onclick='show_floor(0)'>Ground Floor</div>
		<div class='floor_button' data-role="button" onclick='show_floor(1)'>First Floor</div>
		<div class='floor_button' data-role="button" onclick='show_floor(2)'>Second Floor</div>
		<div class='floor_button' data-role="button" onclick='show_floor(3)'>Third Floor</div>
		<div class='floor_button' data-role="button" onclick='show_floor(4)'>Fourth Floor</div>
	</div> -->
</span>


<div style='margin: 0px 20% 0px 20%'>
	<!-- Search for a Room:<input id='room_input' type="text" onkeyup="find_room(this)" name="room_input" size="30" maxlength="50"> -->
<input id='room_input' type="text" onkeyup="find_room(this)" name="room_input" size="30" maxlength="50" 
	value="Search for a room here..." onfocus="if(this.value==this.defaultValue)this.value='';" onblur="if(this.value=='')this.value=this.defaultValue;">
</div>

</div><!-- /page -->
</body>
</html>