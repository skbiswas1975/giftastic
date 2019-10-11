
$(document).on('click','.btn', function()
{
    //alert("Dynamic button action");
//});


//$(".btn").on('click', function(evt){
	        //alert($(this).attr("id"));
			var selectedid=$(this).attr("id");
	        
	    

var $form=$("form"),
	$search=$('#'+selectedid+'').text();
	//var output=null;
	//$giphy=$(".giphy img"),
	//$giphyLink=$(".giphy a");
	
$form.on("submit", function(e) {
	e.preventDefault();
	goGiphy();
});

function goGiphy() {
	var input=$search;
	var api_url="http://api.giphy.com/v1/gifs/search?";
	var apiKey="api_key=9iG24Ub5gqbw0Xyp8WKn0M3oe40pr5J9";
	var query="&q="+input;
	//$.getJSON("http://api.giphy.com/v1/gifs/translate?api_key=9iG24Ub5gqbw0Xyp8WKn0M3oe40pr5J9&s="+input, function(json){
	$.getJSON(api_url+apiKey+query, function(json){
		data=JSON.parse(JSON.stringify(json));
		//imgSrc=data.data.images.original.url;
		//$giphy.fadeOut(1000);
		/*
		setTimeout(function(){
			$giphy.attr("src", imgSrc);
			$giphy.attr("href", imgSrc);
			setTimeout(function(){
				$giphy.addClass("gif");
				$giphy.fadeIn(1000);
			},800);
		},800);
		*/
		var output="";
		
		for(var i=0; i< data.data.length; i++){
		var gifObj=data.data[i];
		gifStill=gifObj.images.original_still.url;
		gifUrl=gifObj.images.original.url;
		gifId=gifObj.id;
		gifRating=gifObj.rating;
		
		console.log(gifUrl)
		//output+="<div class='col-sm-3'>Rating: "+gifRating+"</div><br/><img id='"+gifId+"' onclick='changeImage("+gifId+")' style='cursor:pointer;' class='col-sm-3' width='100px' height='150px' src='"+gifStill+"'/>";
		output+="<div class='col-sm-3 giphyStill'><div class='giphyrating'>Rating: "+gifRating+"</div><img id='"+gifId+"' style='cursor:pointer;' class='img-responsive' style='width:225px! Important;' alt='"+gifStill+"' src='"+gifStill+"'></div>";

	}
	console.log(data)
    $("#gifhy").html(output);
	})
}

});


$(document).on('click','.img-responsive', function()
{
	var api_url="http://api.giphy.com/v1/gifs/";
	var apiKey="?api_key=9iG24Ub5gqbw0Xyp8WKn0M3oe40pr5J9";
	var queryid=this.id;
	var imgId="#"+queryid;
	var animUrl;
	
	$.getJSON(api_url+queryid+apiKey, function(json){
		dataurl=JSON.parse(JSON.stringify(json));
		console.log(dataurl)
		stillUrl=dataurl.data.images.original_still.url;
		animUrl=dataurl.data.images.original.url;
		
		console.log($(imgId).attr("alt"));
		console.log($(imgId).attr("src"));
		
		if($(imgId).attr("src")==stillUrl)
		{
			$(imgId).attr("src", animUrl);
		}
		else
		{
			$(imgId).attr("src", stillUrl);
		}
		
		//console.log(this.src);
	})
	
	//stillUrl=data.data.images.original_still.url;
	//animUrl=data.data.images.original.url;
});