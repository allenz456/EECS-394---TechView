<!DOCTYPE HTML>
<html>
<head>
	<title>TechView</title>

<!-- CSS FILE -->
<link type="text/css" rel="stylesheet" href="main.css">
<!-- JAVASCRIPT FILE -->
<script type="text/javascript" src="main.js"></script>
<script type="text/javascript" src="slider.js"></script>

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

<span onclick='show_floor2(0)' style='cursor: pointer; margin: 10px'>Floor 0</span>
<span onclick='show_floor2(1)' style='cursor: pointer; margin: 10px'>Floor 1</span>
<span onclick='show_floor2(2)' style='cursor: pointer; margin: 10px'>Floor 2</span>
<span onclick='show_floor2(3)' style='cursor: pointer; margin: 10px'>Floor 3</span>
<span onclick='show_floor2(4)' style='cursor: pointer; margin: 10px'>Floor 4</span>

<!-- SELECT BUTTONS -->
<!-- <span id='select_floor' style="display: none;"> -->
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

<!-- <div id='slider'>
<ul>
  <li style='display:block'><img id="floor_map_0" width='95%' src='tech_maps/0.png'/></li>
  <li style='display:none'><img id="floor_map_1" width='95%' src='tech_maps/1.png'/></li>
  <li style='display:none'><img id="floor_map_2" width='95%' src='tech_maps/2.png'/></li>
  <li style='display:none'><img id="floor_map_3" width='95%' src='tech_maps/3.png'/></li>
  <li style='display:none'><img id="floor_map_4" width='95%' src='tech_maps/4.png'/></li>
</ul> 	
</div> -->


<!-- <div style='margin: 0px 20% 0px 20%'> -->
<div id= "search_container"style='margin: 0px 20% 0px 20%;'>

</div>

<script type="text/javascript">
// $("document").ready(function(){
// window.mySwipe = new Swipe(
//   document.getElementById('slider'), {
//     startSlide: 1}
// );});
</script>

</div><!-- /page -->
</body>
</html>