onload = load_function;

var select_floor_string;
var room_labels;
var floor = 1;

function show_floor(floor_number)
{
	floor = floor_number;
	// document.getElementById('select_floor').innerHTML = "\
	// <div class='home_button ui-btn ui-shadow ui-btn-corner-all ui-btn-up-c' data-role='button' onclick='show_restroom("+floor_number+");\nhide_label_containers();'>Where's the nearest Restroom?</div>\
	// <div class='home_button ui-btn ui-shadow ui-btn-corner-all ui-btn-up-c' data-role='button' onclick='display_room_labels()'>View Room Names</div>\
	// <img id='floor_map' width='100%' onclick='add_room_name(this)' src='tech_maps/" + floor + ".png'/>";
	document.getElementById('select_floor').innerHTML = "\
	<img id='floor_map_"+floor+"' width='95%' src='tech_maps/" + floor + ".png'/>";
	// <img id='floor_map' width='95%' src='tech_maps/" + floor + ".png'/>";
	// <img id='floor_map' width='95%' onclick='add_room_name(this)' src='tech_maps/" + floor + ".png'/>";
}

function button_floor(floor_number)
{
	if(floor_number == 0)
	{
		if(floor == 0)
		{
			return;
		}
		else
		{
			floor -= 1;
			document.getElementById('select_floor').innerHTML = "\
			<img id='floor_map_"+floor+"' width='95%' src='tech_maps/" + floor + ".png'/>";
			return floor;
		}
	}

	if(floor_number == 1)
	{
		if(floor == 4)
		{
			return;
		}
		else
		{
			floor += 1;
			document.getElementById('select_floor').innerHTML = "\
			<img id='floor_map_"+floor+"' width='95%' src='tech_maps/" + floor + ".png'/>";
			return floor;
		}
	}
}


function show_restroom(floor_number)
{
  document.getElementById('select_floor').innerHTML = "<img width='100%' onclick='show_floor("+floor_number+")' src='tech_maps/" + floor_number + "b.png'/>";
}

function load_home()
{
	document.getElementById('select_floor').innerHTML = select_floor_string;
}

function load_function()
{
	select_floor_string = document.getElementById('select_floor').innerHTML;
	// Load all of the room_labels from the database
	get_rooms_from_database();
	// show_floor(1);
	// Load all directions from database
	get_directions_from_database();
	show_floor(1);
	// document.getElementById('room_input').focus();
	// document.getElementById('room_input').select();
}

function add_room_name(obj)
{
	// Get the position of the mouse relative to the page (different ways to do this depending on the browser you are using)
	if (!e) var e = window.event;
	if (e.pageX || e.pageY)
	{
		PosX = e.pageX;
		PosY = e.pageY;
	}
	else if (e.clientX || e.clientY)
	{
		PosX = e.clientX + document.body.scrollLeft
			+ document.documentElement.scrollLeft;
		PosY = e.clientY + document.body.scrollTop
			+ document.documentElement.scrollTop;
	}
	// Get the coordinate on the image that the mouse is over
    var room_coord_y = PosY - obj.offsetTop;
    var room_coord_x = PosX - obj.offsetLeft;
	
	document.getElementById('room_label_form').style.display = 'inline';
	document.getElementById('room_label_form').style.top = (room_coord_y+obj.offsetTop) + 'px';
	document.getElementById('room_label_form').style.left = (room_coord_x+obj.offsetLeft) + 'px';

	document.getElementById('room_label_form').innerHTML = '\
	<form method="POST" action="add_room_to_database.php" method="POST" target="add_room_target" onsubmit="document.getElementById(&#39room_label_form&#39).style.display = &#39none&#39">\
			Room Name: <input type="textbox" name="room_name">\
			<input type="hidden" name="room_coord_x" value="'+Math.round(room_coord_x/obj.offsetWidth*100)+'">\
			<input type="hidden" name="room_coord_y" value="'+Math.round(room_coord_y/obj.offsetHeight*100)+'">\
			<input type="hidden" name="floor" value="'+floor+'">\
			<input type="submit" value="Submit">\
		</form>\
		<iframe id="add_room_target" name="add_room_target" src="#" style="width:0;height:0;border:0px solid #fff;"></iframe>';

	// document.getElementById('room_label').style.display = 'inline';
	// document.getElementById('room_label').style.top = (room_coord_y+obj.offsetTop) + 'px';
	// document.getElementById('room_label').style.left = (room_coord_x+obj.offsetLeft) + 'px';
}


function add_direction(obj)
{
	// Get the position of the mouse relative to the page (different ways to do this depending on the browser you are using)
	if (!e) var e = window.event;
	if (e.pageX || e.pageY)
	{
		PosX = e.pageX;
		PosY = e.pageY;
	}
	else if (e.clientX || e.clientY)
	{
		PosX = e.clientX + document.body.scrollLeft
			+ document.documentElement.scrollLeft;
		PosY = e.clientY + document.body.scrollTop
			+ document.documentElement.scrollTop;
	}
	// Get the coordinate on the image that the mouse is over
    var room_coord_y = PosY - obj.offsetTop;
    var room_coord_x = PosX - obj.offsetLeft;
	
	document.getElementById('room_label_form').style.display = 'inline';
	document.getElementById('room_label_form').style.top = (room_coord_y+obj.offsetTop) + 'px';
	document.getElementById('room_label_form').style.left = (room_coord_x+obj.offsetLeft) + 'px';

	document.getElementById('room_label_form').innerHTML = '\
	<form method="POST" action="add_direction_to_database.php" method="POST" target="add_room_target" onsubmit="document.getElementById(&#39room_label_form&#39).style.display = &#39none&#39">\
			Destination Name: <input type="textbox" name="destination_name"><br>\
			Step Number: <input type="textbox" name="step_number"><br>\
			Total Step Count: <input type="textbox" name="total_step_count"><br>\
			Directions: <textarea rows="7" name="direction_text"></textarea><br>\
			<input type="hidden" name="direction_coord_x" value="'+Math.round(room_coord_x/obj.offsetWidth*100)+'">\
			<input type="hidden" name="direction_coord_y" value="'+Math.round(room_coord_y/obj.offsetHeight*100)+'">\
			<input type="hidden" name="floor" value="'+floor+'">\
			<input type="submit" value="Submit">\
		</form>\
		<iframe id="add_room_target" name="add_room_target" src="#" style="width:0;height:0;border:0px solid #fff;"></iframe>';

	// document.getElementById('room_label').style.display = 'inline';
	// document.getElementById('room_label').style.top = (room_coord_y+obj.offsetTop) + 'px';
	// document.getElementById('room_label').style.left = (room_coord_x+obj.offsetLeft) + 'px';
}


function hide_label_containers()
{
	document.getElementById('room_label_container').style.display = 'none';
	document.getElementById('room_label_form').style.display = 'none';
}

function display_room_labels()
{
	var new_room_div;
	var room_label_container = document.getElementById('room_label_container');
	var floor_map_offset_y = document.getElementById('floor_map').offsetTop;
	var floor_map_offset_x = document.getElementById('floor_map').offsetLeft;
	var floor_map_offset_width = document.getElementById('floor_map').offsetWidth;
	var floor_map_offset_height = document.getElementById('floor_map').offsetHeight;
	document.getElementById('room_label_container').style.display = 'inline';
	room_label_container.innerHTML = '';
	for (var room_ii = 0; room_ii < room_labels.data_ii.length; room_ii++)
	{
		if(floor == room_labels.data_ii[room_ii].floor)
		{
			new_room_div = "<div id='dbroomid_"+room_labels.data_ii[room_ii].db_room_id+"' class='room_label_divs'>"+room_labels.data_ii[room_ii].room_name+"</div>";
			room_label_container.innerHTML = room_label_container.innerHTML + new_room_div;
			document.getElementById('dbroomid_'+room_labels.data_ii[room_ii].db_room_id).style.top = (parseInt(room_labels.data_ii[room_ii].room_coord_y,10)/100*floor_map_offset_width+floor_map_offset_y)+'px';
			document.getElementById('dbroomid_'+room_labels.data_ii[room_ii].db_room_id).style.left = (parseInt(room_labels.data_ii[room_ii].room_coord_x,10)/100*floor_map_offset_width+floor_map_offset_x)+'px';
		}
	}
	// document.getElementById('room_label_container').innerHTML = room_list;
	// document.getElementById('test').innerHTML = room_list;
}

function find_room(obj){

	// document.getElementById('test').innerHTML = document.getElementById('room_input').value;
	
	var flag = 0;

	var new_room_div;
	var room_label_container = document.getElementById('room_label_container');
	room_label_container.style.display = 'inline';
	room_label_container.innerHTML = '';
	var room_name = document.getElementById('room_input').value;

	if(room_name == '')
	{
		show_floor(1);
		// *SWIPE* Changes swipe view when nothing is in search bar
		// new Swipe(document.getElementById('slider'), {startSlide: 1});
		return;
	}
	for(var room_ii = 0; room_ii < room_labels.data_ii.length; room_ii++)
	{
		if(room_name.toLowerCase() == room_labels.data_ii[room_ii].room_name.toLowerCase())
		{
			// Assign the floor variable
			floor = room_labels.data_ii[room_ii].floor;
			// Change the image to the correct floor number, this will change the image id to floor_map_<FLOOR #>
			// ...which we will need to get the position of below
			show_floor(floor);

			// *SWIPE* Changes swipe view to floor of room being searched
			// new Swipe(document.getElementById('slider'), {startSlide: floor});

			// Get the coordinates of the room to be searched for
			var floor_map_offset_width = document.getElementById('floor_map_'+floor).offsetWidth;
			var floor_map_offset_height = document.getElementById('floor_map_'+floor).offsetHeight;
			var floor_map_offset_y = document.getElementById('floor_map_'+floor).offsetTop;
			// The floor_map_offset_x must be adjusted for swipe mode to work (all images are in a long row, rather than replacing the image)
			// var floor_map_offset_x = document.getElementById('floor_map_'+floor).offsetLeft - floor_map_offset_width*floor;
			var floor_map_offset_x = document.getElementById('floor_map_'+floor).offsetLeft;

			// Place the label on the map
			new_room_div = "<div id='dbroomid_"+room_labels.data_ii[room_ii].db_room_id+"' class='room_label_divs'>"+room_labels.data_ii[room_ii].room_name+"</div>";
			room_label_container.innerHTML = room_label_container.innerHTML + new_room_div;
			document.getElementById('dbroomid_'+room_labels.data_ii[room_ii].db_room_id).style.top = (parseInt(room_labels.data_ii[room_ii].room_coord_y,10)/100*floor_map_offset_width+floor_map_offset_y)+'px';
			document.getElementById('dbroomid_'+room_labels.data_ii[room_ii].db_room_id).style.left = (parseInt(room_labels.data_ii[room_ii].room_coord_x,10)/100*floor_map_offset_width+floor_map_offset_x)+'px';

			// If we found a room, flag it. Otherwise show first floor view
			flag = 1
			document.getElementById('room_input').unfocus();
			document.getElementById('room_input').unselect();
			document.getElementById('body_div').setAttribute("style","-webkit-transform: scale(1.0);");
		}
	}
	if(flag == 0)
	{
		// If room is not matched show first floor view. We may want to change this later.
		show_floor(1);
	}
}

function get_rooms_from_database()
{
	var xmlHttp = getXMLHttp();
    xmlHttp.onreadystatechange = function()
    {
        if(xmlHttp.readyState == 4)
        {
            var room_labels_string = xmlHttp.responseText;
            room_labels = eval ("({'data_ii':" + room_labels_string  + "})");
        }
    }

    xmlHttp.open("GET", 'get_rooms_from_database.php', true);
    xmlHttp.send(null);
}


function add_room_to_database()
{
	var xmlHttp = getXMLHttp();
    xmlHttp.onreadystatechange = function()
    {
        if(xmlHttp.readyState == 4)
        {
            document.getElementById('test').innerHTML = xmlHttp.responseText;
        }
    }

    var message = '';

    xmlHttp.open("POST", 'add_room_to_database.php', true);
    xmlHttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xmlHttp.setRequestHeader("Content-length","message.length");
    xmlHttp.setRequestHeader("Connection","close");
    xmlHttp.send(message);
}

function msg_from_ajax(message)
{
	document.getElementById('test').innerHTML = message;
}

// Setup a request function FOR USE WITH ALL AJAX REQUESTS
function getXMLHttp()
{
  var xmlHttp
  try
  {
    //Firefox, Opera 8.0+, Safari
    xmlHttp = new XMLHttpRequest();
  }
  catch(e)
  {
    //Internet Explorer
    try
    {
      xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
    }
    catch(e)
    {
      try
      {
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
      }
      catch(e)
      {
        alert("Your browser does not support AJAX!")
        return false;
      }
    }
  }
  return xmlHttp;
}


var oldHTML;
var directions_list;

function get_directions_from_database()
{
	var xmlHttp = getXMLHttp();
    xmlHttp.onreadystatechange = function()
    {
        if(xmlHttp.readyState == 4)
        {
            var directions_labels_string = xmlHttp.responseText;
            directions_list = eval ("({'data_ii':" + directions_labels_string  + "})");
        }
    }

    xmlHttp.open("GET", 'get_directions_from_database.php', true);
    xmlHttp.send(null);
}

function find_directions(targetDestination){

	var directionString = '';

	for(var direction_ii = 0; direction_ii < directions_list.data_ii.length; direction_ii++)
	{
		if(targetDestination.toLowerCase() == directions_list.data_ii[direction_ii].destination.toLowerCase())
		{
			directionString += directions_list.data_ii[direction_ii].step_direction + ",";
		}
	}
	directionString = directionString.substring(0, directionString.length - 1);
	return directionString;
}
function show_directions(value)
{
	oldHTML = document.getElementById('search_container').innerHTML;
	var foundDirectionArray = find_directions(value).split(",");
	var directionsToPrint = '';
	for (var ii = 0; ii < foundDirectionArray.length; ii++)
	{
		directionsToPrint += foundDirectionArray[ii] + " ";
	}
	var directionsHTML = "<FORM>" + directionsToPrint + "<br><INPUT TYPE='button' onclick='showSearch(oldHTML)' value='Go back'></FORM>";
	document.getElementById('search_container').innerHTML=directionsHTML;
}

function showSearch(oldHTML)
{
	document.getElementById('search_container').innerHTML = oldHTML;
}
