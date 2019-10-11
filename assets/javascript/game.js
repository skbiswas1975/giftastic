var $=function(id) {
	return document.getElementById(id);
}

	var game=["JANUARY","FEBRUARY","MARCH","APRIL"]
	var choice=Math.floor(Math.random()*4);
	var answer=game[choice];
	var myLength=answer.length;
	var display=[myLength];
	var win=myLength;
	var letters=answer.split('');
	var attemptsLeft=10;
	var output="";
	var userLetter="";
	var allUserLetter="";
	
	
	var setup=function()
	{
		document.getElementById("status").innerHTML="Started!";
		document.getElementById("cw").innerHTML="Current Word";
		for(var i=0; i<answer.length; i++)
		{
			display[i]="_ ";
			output=output+display[i]
		}
		document.getElementById("game").innerHTML=output;
		output="";
	}

var submit=function()
{
	output="";
	userLetter=$("letter").value;
	$("letter").value="";

	for(var c=0; c<answer.length; c++)
	{
		//alert(letters[c]);
		if(userLetter.toUpperCase()==letters[c])
		{
			display[c]=userLetter.toUpperCase();
			win--;
		}
			output=output+display[c]+" ";
	}
	document.getElementById("game").innerHTML=output;
	output="";
	attemptsLeft--;

	if(win<1)
	{
		document.getElementById("guesses").innerHTML="Wins";
		setup();
		
	}
	else if(attemptsLeft<1)
	{
		document.getElementById("guesses").innerHTML="Loses";
		setup();
		
	}
	else
	{
		allUserLetter=allUserLetter.toUpperCase()+" "+userLetter.toUpperCase();
		document.getElementById("playerGuesses").innerHTML="Letters already guessed " + allUserLetter;
		document.getElementById("guesses").innerHTML="Number of guesses remaining<br/>" + attemptsLeft;
	}
}

document.onkeypress=function()
{
	if(document.getElementById("status").innerHTML!="Started!")
	{
	setup();
	$("submit").onclick=submit;
	}
}