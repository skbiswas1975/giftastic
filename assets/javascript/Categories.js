
var Ctg=Array();

function show(){
Ctg = ['dog', 'cat', 'rabbit', 'hamster', 'skunk', 'goldfish', 'bird', 'frog'];
var ctgButtons = $('#ctgButtons');
for (var i = 0; i < Ctg.length; i++) {
  ctgButtons.append('<button type="submit" id="' + Ctg[i] + '" name="' + Ctg[i] + '" class="btn">' + Ctg[i] + '</button>');
}
}

//var data = new Array(); 
function add_element(){
Ctg.push(document.getElementById('t1').value); // adding element to array

var pval="";
for(i=0; i<Ctg.length; i++)
{
	pval=pval+Ctg[i];
}
document.getElementById('t1').value=''; // Making the text box blank
show(); // displaying the array elements
}