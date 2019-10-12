
$(document).on('click','.btn', function()
{

var selectedid=$(this).attr("id");    

var $form=$("form"),
	$search=$('#'+selectedid+'').text();
	
$form.on("submit", function(e) {
	e.preventDefault();
	goGiphy();
});

function goGiphy() {
	var input=$search;
	var api_url="https://api.giphy.com/v1/gifs/search?limit=10";
	var apiKey="&api_key=9iG24Ub5gqbw0Xyp8WKn0M3oe40pr5J9";
	var query="&q="+input;
	
	$.getJSON(api_url+apiKey+query, function(json){
		data=JSON.parse(JSON.stringify(json));
		var output="";
		
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


$(document).on('click','.img-responsive', function()
{
	var api_url="https://api.giphy.com/v1/gifs/";
	var apiKey="?api_key=9iG24Ub5gqbw0Xyp8WKn0M3oe40pr5J9";
	var queryid=this.id;
	var imgId="#"+queryid;
	var animUrl;
	
	$.getJSON(api_url+queryid+apiKey, function(json){
		dataurl=JSON.parse(JSON.stringify(json));
		//console.log(dataurl)
		stillUrl=dataurl.data.images.original_still.url;
		animUrl=dataurl.data.images.original.url;
		
		//console.log($(imgId).attr("alt"));
		//console.log($(imgId).attr("src"));
		
		if($(imgId).attr("src")==stillUrl)
		{
			$(imgId).attr("src", animUrl);
		}
		else
		{
			$(imgId).attr("src", stillUrl);
		}
	})
});