var counter=0; 
var output="";
//var searchTopic="";


$(document).on('click','.btn', function()
{
	
var gifStill="";
var gifUrl="";
var selectedid=$(this).attr("id");   

/*if(document.cookie["SearchTopic"] !=selectedid)
{
	var counter=0; 
	var output="";
	var searchTopic="";
//}*/



var $form=$("form"),
	$search=$('#'+selectedid+'').text();
	
$form.on("submit", function(e) {
	e.preventDefault();
	goGiphy();
});

function goGiphy() {

	//var counter=0; 
	//var output="";
	var counter=0; 
	var output="";
	//var searchTopic="";
	//searchTopic=$search;
	var input=$search;
	//var api_url="https://api.giphy.com/v1/gifs/search?limit=10&offset="+counter;
	var api_url="https://api.giphy.com/v1/gifs/search?limit=10";
	var apiKey="&api_key=9iG24Ub5gqbw0Xyp8WKn0M3oe40pr5J9";
	var query="&q="+input;

	//counter=counter+10;

	//console.log(document.cookie);

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

		//console.log(gifUrl)
		//output+="<div class='col-sm-3'>Rating: "+gifRating+"</div><br/><img id='"+gifId+"' onclick='changeImage("+gifId+")' style='cursor:pointer;' class='col-sm-3' width='100px' height='150px' src='"+gifStill+"'/>";
		output+="<div class='col-sm-3 giphyStill'><div class='giphyrating'><span class='giphyHeader'>Title: "+gifTitle+"</span><br/><span class='giphyHeader'>Rating: "+gifRating+"</span></div><img id='"+gifId+"' style='cursor:pointer;' class='img-responsive' style='width:225px! Important;' alt='"+gifStill+"' src='"+gifStill+"'></div>";
		
	}
	//console.log(data)
    $("#gifhy").html(output);
	})
}

});


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
			alert("Please wait while image is loading!");
			$(imgId).attr("src", animGif);
		}
		else
		{
			$(imgId).attr("src", stillGif);
		}
});