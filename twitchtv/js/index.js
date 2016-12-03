//this works make it pretty

var url = 'https://www.twitch.tv/';
var JSONurl = 'https://wind-bow.hyperdev.space/twitch-api/streams/';
var streamers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

function findOnline() {
  //Stub -- show only online streams
}

function findOffline() {
  //stub -- show only offline streams
}

function showAll() {
  //stub -- show all streams, on or offline
}

function showAddStream(){
  $('.add').addClass('display').focus();
  $('.ins').addClass('display');
}

function addStream() {
  if ($('.add').val() != "") {
    var newstreamer = $('.add').val();
    //console.log(newstreamer);
    streamers.push(newstreamer);
    $('.streams').empty();
    getStreams();
    $('.add').val("");
  } 
}

function getStreams() {
  var arr = [];
  for (i = 0; i < streamers.length; i++) {    
    $.getJSON(JSONurl + streamers[i] + '?callback=?', function(data, status, xhr) {
        

    if (data.error){
       streamers.pop(); 
       //do something in the DOM here to alert that this steram does not exist
       alert(data.message);
       
    }
      
    else{
      var id = data._links.self.slice(37);

        if (data.stream === null) {
          $('.streams').append("<div><p>" + id + ": offline </p></div>");
        } 
      
        else {//<img src=" + data.stream.preview.small + ">
          $('.streams').append("<div><p><a href=" + url + id + "' target='_blank'> " + id + ": ONLINE NOW</p></a></div>");
        }
    }
  });
     
}

  
  
  $(".addStream").keyup(function(event) {
    if (event.keyCode == 13) {
      addStream();
      $('.add').removeClass('display');
      $('.ins').removeClass('display');
      
    }
  });






}