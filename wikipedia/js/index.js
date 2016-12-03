$('.searchBox').focus();

function searchWiki() {
 var searchTerm = $(".searchBox").val();
 var url = "https://www.wikipedia.org/w/api.php";
 var result = "";

 $.ajax({
  url: url,
  data: {
   action: 'query',
   list: 'search',
   srsearch: searchTerm,
   format: 'json'
  },
  dataType: 'jsonp',
  success: function(response) {
   //console.log(response);
   $('.resultBox').children().remove();
   for (var i in response.query.search) {
    $('.resultBox').append("<a target='_blank' href='https://en.wikipedia.org/wiki/" + response.query.search[i].title + "'><div><h4>" + response.query.search[i].title + "</h4><p>" + response.query.search[i].snippet + "</p><br></div></a>");
   }
  }
 })
};

$(".searchBox").keyup(function(event) {
 if (event.keyCode == 13) {
  searchWiki();
  
 };
});