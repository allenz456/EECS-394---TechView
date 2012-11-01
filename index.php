<!DOCTYPE HTML>
<html>
<head>
	<title>TechView</title>

<!-- CSS FILE -->
<link type="text/css" rel="stylesheet" href="main.css">
<!-- JAVASCRIPT FILE -->
<script type="text/javascript" src="main.js"></script>
<script type="text/javascript" src="slider.js"></script>
<!-- JQuery for swipe -->
<script src="jquery_mobile/jquery.js"></script>

<!-- JQuery Mobile -->
<!-- <link rel="stylesheet" href="jquery_mobile/jquery.mobile-1.2.0.css" /> -->
<!-- <script src="http://code.jquery.com/jquery-1.8.2.min.js"></script> -->
<!-- <script src="jquery_mobile/jquery.mobile-1.2.0.js"></script> -->


<!-- <meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable:no;"> -->

</head>
<body id='body_div'>
	<div id='shadow_div'></div>

	<!-- HEADER -->
	<div id='title'>TechView</div>

	<div id='test'></div>

	<!-- lable_container includes a list of divs that will be filled depending on the needs of the user -->
	<div id='label_container'>
		<div id='room_label_container'></div>
		<div id='room_label_form'></div>
		<div id='directions_label_container'></div>

	</div>

<!-- 	<div>
		<div id='left_floor_button' class='left_floor_button'  onclick='button_floor(0)'><img src='icons/left_button.png'/></div>
		<div id='right_floor_button' class='right_floor_button' onclick='button_floor(1)'><img src='icons/right_button.png'/></div>
	</div> -->

	<!-- SELECT BUTTONS -->
	<!-- <span id='select_floor' style="display: none;"> -->
	<span id='select_floor'>
	</span>

	<div id='slider'>
		<ul>
		  <li style='display:none'><img id="floor_map_0" width='95%' src='tech_maps/0.png'/></li>
		  <li style='display:block'><img id="floor_map_1" width='95%' src='tech_maps/1.png'/></li>
		  <li style='display:none'><img id="floor_map_2" width='95%' src='tech_maps/2.png'/></li>
		  <li style='display:none'><img id="floor_map_3" width='95%' src='tech_maps/3.png'/></li>
		  <li style='display:none'><img id="floor_map_4" width='95%' src='tech_maps/4.png'/></li>
		</ul> 	
	</div>


	<!-- Search bar and select bar container -->
	<div id= "search_container">
		<!-- Search for a Room:<input id='room_input' type="text" onkeyup="find_room(this)" name="room_input" size="30" maxlength="50"> -->

		<div class='selection_div'>
			<input id='room_input' type="text" onkeyup="find_room(this)" name="room_input" size="30" maxlength="50" value="Search for a room here..." onfocus="if(this.value==this.defaultValue)this.value='';" onblur="if(this.value=='')this.value=this.defaultValue;">
		</div>
		<div class='selection_div'>
			<div onclick='showToughRoomList();' style='background: transparent; width: 90%; height: 40px; padding: 15px; font-size: 95%; border-style: solid; border-color: silver; border-size: 1px; box-shadow: 2px 2px 5px black; border-radius: 15px;'>
				Hard to find rooms
			</div>
		</div>

<!-- 		<div class='selection_div' onclick='showToughRoomList();'>
			<select onchange= "show_directions(this.value)" name="hotspots">
			<option value="selectthis" >Hard to find rooms</option>
			<option value="techExpress" >Tech Express</option>
			<option value="muddLibrary" >Mudd Library</option>
			<option value="MG47" >MG47 (Computer Lab)</option>
			<option value="fordBridge" >Bridge to Ford</option>
			<option value="wilkLab" >Wilkinson Lab</option>
		<div> -->
	</div>

	<script type="text/javascript">
	$("document").ready(function(){
	window.mySwipe = new Swipe(
	  document.getElementById('slider'), {
	    startSlide: 1}
	);});
	</script>


</body>
</html>