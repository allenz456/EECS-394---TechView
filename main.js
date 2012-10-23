onload = load_function;

var select_floor_string;
var room_labels;
var floor;

function show_floor(floor_number)
{
	floor = floor_number;
	// document.getElementById('select_floor').innerHTML = "\
	// <div class='home_button ui-btn ui-shadow ui-btn-corner-all ui-btn-up-c' data-role='button' onclick='show_restroom("+floor_number+");\nhide_label_containers();'>Where's the nearest Restroom?</div>\
	// <div class='home_button ui-btn ui-shadow ui-btn-corner-all ui-btn-up-c' data-role='button' onclick='display_room_labels()'>View Room Names</div>\
	// <img id='floor_map' width='100%' onclick='add_room_name(this)' src='tech_maps/" + floor + ".png'/>";
	document.getElementById('select_floor').innerHTML = "\
	<img id='floor_map' width='95%' src='tech_maps/" + floor + ".png'/>";
	// <img id='floor_map' width='95%' onclick='add_room_name(this)' src='tech_maps/" + floor + ".png'/>";
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
	var floor_map_offset_y = document.getElementById('floor_map').offsetTop;
	var floor_map_offset_x = document.getElementById('floor_map').offsetLeft;
	var floor_map_offset_width = document.getElementById('floor_map').offsetWidth;
	var floor_map_offset_height = document.getElementById('floor_map').offsetHeight;
	document.getElementById('room_label_container').style.display = 'inline';
	room_label_container.innerHTML = '';

	var room_name = document.getElementById('room_input').value;

	if(room_name == '')
	{
		show_floor(1);
		return;
	}
	for(var room_ii = 0; room_ii < room_labels.data_ii.length; room_ii++)
	{
		if(room_name.toLowerCase() == room_labels.data_ii[room_ii].room_name.toLowerCase())
		{
			// document.getElementById('test').innerHTML = 'hi';
			new_room_div = "<div id='dbroomid_"+room_labels.data_ii[room_ii].db_room_id+"' class='room_label_divs'>"+room_labels.data_ii[room_ii].room_name+"</div>";
			room_label_container.innerHTML = room_label_container.innerHTML + new_room_div;
			document.getElementById('dbroomid_'+room_labels.data_ii[room_ii].db_room_id).style.top = (parseInt(room_labels.data_ii[room_ii].room_coord_y,10)/100*floor_map_offset_width+floor_map_offset_y)+'px';
			document.getElementById('dbroomid_'+room_labels.data_ii[room_ii].db_room_id).style.left = (parseInt(room_labels.data_ii[room_ii].room_coord_x,10)/100*floor_map_offset_width+floor_map_offset_x)+'px';
			show_floor(room_labels.data_ii[room_ii].floor);
			flag = 1
			document.getElementById('room_input').unfocus();
	document.getElementById('room_input').unselect();
			document.getElementById('body_div').setAttribute("style","-webkit-transform: scale(1.0);");
		}
	}
	if(flag == 0)
	{
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