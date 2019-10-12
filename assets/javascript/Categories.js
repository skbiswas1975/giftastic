
var topic=Array();

function show(){
topics = ['dog', 'cat', 'rabbit', 'hamster', 'skunk', 'goldfish', 'bird', 'frog'];
var topicButtons = $('#topicButtons');
for (var i = 0; i < topics.length; i++) {
  topicButtons.append('<button type="submit" id="' + topics[i] + '" name="' + topics[i] + '" class="btn">' + topics[i] + '</button>');
  }
}

function add_element(){
  var newTopic=document.getElementById('newTopicVal').value;
  
  var topicButtons = $('#topicButtons');
  topicButtons.append('<button type="submit" id="' + newTopic + '" name="' + newTopic + '" class="btn">' + newTopic + '</button>');
}