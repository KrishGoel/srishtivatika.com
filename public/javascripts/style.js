// Body merge gradient
var topnavHeight = document.getElementById('topnav').offsetHeight;
document.getElementById("bodyMerge").style.top = topnavHeight;

// Banner carousel
var i = 1;
var images = 4;
function imageChange() {
	var newImageURL = ("url('/images/bannerCarousel/" + i + ".jpg')");
	document.getElementById("bannerSection").style.backgroundImage = newImageURL;
	i = i+1;
	if(i == (images+1)) {
		i = 1;
	};
};

function carousel() {
	setInterval('imageChange()', 5000);
};
carousel();

// Google map width
// var googleMapDivWidth = document.getElementById("GmapDiv").offsetWidth;
// document.getElementById("Gmap").style.width = (googleMapDivWidth + "px");