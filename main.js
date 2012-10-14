onload = load_function;

var select_floor_string;

function show_floor(floor_number)
{
	document.getElementById('select_floor').innerHTML = "<img width='100%' onclick='add_room_name(this)' src='tech_maps/" + floor_number + ".png'/>";
}

function load_home()
{
	document.getElementById('select_floor').innerHTML = select_floor_string;
}

function load_function()
{
	select_floor_string = document.getElementById('select_floor').innerHTML;
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
	document.getElementById('test').innerHTML = 'X: '+room_coord_x+'Y: '+room_coord_y;
	
	document.getElementById('room_label_form').style.display = 'inline';
	document.getElementById('room_label_form').style.top = (room_coord_y+obj.offsetTop) + 'px';
	document.getElementById('room_label_form').style.left = (room_coord_x+obj.offsetLeft) + 'px';

	document.getElementById('room_label_form').innerHTML = '\
	<form method="POST" action="add_room_to_database.php" method="POST" target="add_room_target" onsubmit="document.getElementById(&#39room_label_form&#39).style.display = &#39none&#39">\
			Room Name: <input type="textbox" name="room_name">\
			<input type="hidden" name="room_coord_x" value="'+room_coord_x+'">\
			<input type="hidden" name="room_coord_y" value="'+room_coord_y+'">\
			<input type="submit" value="Submit">\
		</form>\
		<iframe id="add_room_target" name="add_room_target" src="#" style="width:0;height:0;border:0px solid #fff;"></iframe>';

	// document.getElementById('room_label').style.display = 'inline';
	// document.getElementById('room_label').style.top = (room_coord_y+obj.offsetTop) + 'px';
	// document.getElementById('room_label').style.left = (room_coord_x+obj.offsetLeft) + 'px';
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