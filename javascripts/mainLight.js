
var headerAndFooterHeight = 173;

// BEGIN ROLLOVER STUFF
var revert = new Array();
var inames = new Array('header_menu_event', 'header_menu_pray', 'header_menu_send', 'header_menu_go');

// Preload
if (document.images) {
  var flipped = new Array();
  for(i=0; i< inames.length; i++) {
    flipped[i] = new Image();
    flipped[i].src = "images/"+inames[i]+"_on.png";
  }
}

function over(num) {
  if(document.images) {
    revert[num] = document.images[inames[num]].src;
    document.images[inames[num]].src = flipped[num].src;
  }
}
function out(num) {
  if(document.images) document.images[inames[num]].src = revert[num];
}

// END ROLLOVER STUFF
function resizeContentPane() {
  if (document.getElementById("ammap")) {
    var map = document.getElementById("ammap");
    //map.style.height = (window.innerHeight - headerAndFooterHeight) + "px";
    //map.style.width = window.innerWidth + "px";
    map.style.height = (document.body.clientHeight - headerAndFooterHeight) + "px";
    map.style.width = document.body.clientWidth + "px";
  }
	var flashContentDiv = document.getElementById("flashcontent");
	//flashContentDiv.style.height = (window.innerHeight - headerAndFooterHeight) + "px";
	//flashContentDiv.style.width = window.innerWidth + "px";
	flashContentDiv.style.height = (document.body.clientHeight - headerAndFooterHeight) + "px";
	flashContentDiv.style.width = document.body.clientWidth+ "px";
}

function reloadMap(){

	var so = new SWFObject("ammap/ammap.swf", "ammap", "100%", "", "8", "#444444");
	so.addVariable("path", "ammap/");
	so.addVariable("settings_file", escape("ammap/ammap_settings.xml"));
	so.addVariable("data_file", escape("ammap/ammap_data.xml"));
	so.addParam("wmode", "transparent");
	so.write("flashcontent");

	resizeContentPane();

}

function dropDown(dropID) {
        var drop = document.getElementById(dropID);
        drop.style.visibility = "visible";
}

function undrop(dropID) {
        var drop = document.getElementById(dropID);
        drop.style.visibility = "hidden";
}
