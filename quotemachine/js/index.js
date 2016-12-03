
  var count = 0;
  var newQuote = "";
  $("#getQuote").on("click", function() {
    var html = "";
    var quote = new XMLHttpRequest();
    quote.open("GET", "https://andruxnet-random-famous-quotes.p.mashape.com/", false);
    quote.setRequestHeader("X-Mashape-Key", "W2YuN3Bnmqmsh2gDeYz8k1QzI1XUp1JkS9hjsnJDbwdDnMnFgR");
    quote.send();
    var quotes = JSON.parse(quote.responseText);
    newQuote = quotes["quote"] + " --" + quotes["author"];
    html += "<p>[[ " +quotes["quote"] + " ]]<br> <b> " + quotes["author"] + "</b></p><br>";
    count++;
    $("#quote").html(html);
    });
  
  $("#sendTweet").on("click", function(){
    var url = "https://twitter.com/intent/tweet" + "?text=" +newQuote;
    window.open(url);
  })