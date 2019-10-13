
var counter=0; 
var output="";
var searchTopic="";


$(document).on('click','.btn', function()
{
	
var gifStill="";
var gifUrl="";
var selectedid=$(this).attr("id");  

searchTopic=getCookie("SearchTopic");

console.log(getCookie("SearchTopic"));

if(searchTopic !=selectedid)
{
	var counter=0; 
	var output="";
	var searchTopic="";
}

var $form=$("form");
	//$search=$('#'+selectedid+'').text();
	
$form.on("submit", function(e) {
	e.preventDefault();
	goGiphy();
});

function goGiphy() {

	//var counter=0; 
	//var output="";
	//searchTopic=$search;
	searchTopic=$(this).attr("id"); 
	var input=searchTopic;
	var api_url="https://api.giphy.com/v1/gifs/search?limit=10&offset="+counter;
	var apiKey="&api_key=9iG24Ub5gqbw0Xyp8WKn0M3oe40pr5J9";
	var query="&q="+input;

	counter=counter+10;
	
	setCookie("counter", counter, 1);
	setCookie("SearchTopic", searchTopic, 1);

	console.log(document.cookie);

	/*var myCookie = JSON.stringify(data);
		document.cookie = "result="+myCookie;
		console.log(document.cookie);*/
	
	$.getJSON(api_url+apiKey+query, function(json){
		data=JSON.parse(JSON.stringify(json));
		
		for(var i=0; i< data.data.length; i++){
		var gifObj=data.data[i];
		gifStill=gifObj.images.original_still.url;
		gifUrl=gifObj.images.original.url;
		gifId=gifObj.id;
		gifRating=gifObj.rating;
		gifTitle=gifObj.title;

		console.log(gifUrl)
		//output+="<div class='col-sm-3'>Rating: "+gifRating+"</div><br/><img id='"+gifId+"' onclick='changeImage("+gifId+")' style='cursor:pointer;' class='col-sm-3' width='100px' height='150px' src='"+gifStill+"'/>";
		output+="<div class='col-sm-3 giphyStill'><div class='giphyrating'><span class='giphyHeader'>Title: "+gifTitle+"</span><br/><span class='giphyHeader'>Rating: "+gifRating+"</span></div><img id='"+gifId+"' style='cursor:pointer;' class='img-responsive' style='width:225px! Important;' alt='"+gifStill+"' src='"+gifStill+"'></div>";
		
	}
	console.log(data)
    $("#gifhy").html(output);
	})
}

});

function setCookie(name, value, days) {
    var d = new Date;
    d.setTime(d.getTime() + 24*60*60*1000*days);
    document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
}

function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i <ca.length; i++) {
	  var c = ca[i];
	  while (c.charAt(0) == ' ') {
		c = c.substring(1);
	  }
	  if (c.indexOf(name) == 0) {
		return c.substring(name.length, c.length);
	  }
	}
	return "";
  }


$(document).on('click','.img-responsive', function()
{
	var queryid=this.id;
	var imgId="#"+queryid;
	var animGif;
	var stillGif;

	for (var index = 0; index < data.data.length; index++) {

		var singleData = data.data[index];
	   
		if(singleData.id == queryid){
			animGif=singleData.images.original.url;
			stillGif=singleData.images.original_still.url;
			break;
		  }
	   }

	   if($(imgId).attr("src")==stillGif)
		{
			alert("Please wait while animated gif is loading!");
			$(imgId).attr("src", animGif);
		}
		else
		{
			$(imgId).attr("src", stillGif);
		}
});