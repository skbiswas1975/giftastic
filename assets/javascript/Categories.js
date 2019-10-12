
var topic=Array();

function show(){
topic = ['dog', 'cat', 'rabbit', 'hamster', 'skunk', 'goldfish', 'bird', 'frog'];
var topicButtons = $('#topicButtons');
for (var i = 0; i < topic.length; i++) {
  topicButtons.append('<button type="submit" id="' + topic[i] + '" name="' + topic[i] + '" class="btn">' + topic[i] + '</button>');
  }
}

function add_element(){
  var newTopic=document.getElementById('newTopicVal').value;
  if()
  var topicButtons = $('#topicButtons');
  topicButtons.append('<button type="submit" id="' + newTopic + '" name="' + newTopic + '" class="btn">' + newTopic + '</button>');
}