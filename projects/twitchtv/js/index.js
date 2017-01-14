//can't figure out how to do this async, ,and probably the way of updating the stremers object displayed is also inefficient
var url = 'https://www.twitch.tv/';
var streamsUrl = 'https://wind-bow.gomix.me/twitch-api/streams/';
var streamers = [{name: 'ESL_SC2', status: 'offline'}, {name: 'OgamingSC2', status: 'offline'}, {name: 'cretetion', status: 'offline'}, {name: 'freecodecamp', status: 'offline'}, {name: 'storbeck', status: 'offline'}, {name: 'habathcx', status: 'offline'}, {name: 'RobotCaleb', status: 'offline'}, {name: 'noobs2ninjas', status: 'offline'}];

function showAddStream(){
  var addInput = document.getElementById('add');
  var instructions = document.getElementById('ins');
  addInput.addEventListener("keyup",function(event) {
    if (event.keyCode == 13) {
      showAddStream();
     }
  });
  if (addInput.classList.contains('display')){
    addInput.classList.remove('display');
    instructions.classList.remove('display');
    addStream(addInput.value);

  } else {
    addInput.value = '';
    addInput.classList += ' display';
    addInput.focus();
    instructions.classList += ' display';
  }
}

function addStream(streamer) {
  var streamsElement = document.getElementById('streams');
  if (streamer != "") {
    streamers.push({name: streamer, status: 'offline'});
  }
  while (streamsElement.firstChild){
    streamsElement.removeChild(streamsElement.firstChild);
  }
  getStreams();
}

function getStreams() {
  var streamsElement = document.getElementById('streams');
  for (i = 0; i < streamers.length; i++) {
    var streamerDiv = document.createElement('div');
    var streamData = requestStreamData(streamers[i].name);

    if (streamData.slice(10,14) === "null"){
      streamers[i].status = "offline";
      streamerDiv.innerHTML = streamers[i].name + ": " + streamers[i].status;
    } else {
      streamers[i].status = "online";
      streamerDiv.innerHTML = '<a href="' + url + streamers[i].name + '"target="blank">' + streamers[i].name + ": "+ streamers[i].status + '</a>';
    }

    streamsElement.appendChild(streamerDiv);
   }
}

function requestStreamData(streamer){
  var httpRequest = new XMLHttpRequest();
  var response;
  httpRequest.addEventListener("load", function(){
    response = httpRequest.response;
  });

  httpRequest.open('GET', streamsUrl + streamer, false);
  httpRequest.send();
  return response;
}
