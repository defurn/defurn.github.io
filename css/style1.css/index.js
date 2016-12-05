var clipboard = new Clipboard('#email');
clipboard.on('success', function(e) {
  console.log(e);
        $('#email').html("copied to clipboard");
         $('#email').addClass("copy");
        setTimeout(function(){
        $('#email').html("defurni@gmail.com");
        $('#email').removeClass('copy');
        }, 2000);
    });
clipboard.on('error', function(e) {
        console.log(e);
    });
