 // Original

  // $(document).ready(function(){
  //   var $body = $('body');
  //   $body.html('');

  //   var index = streams.home.length - 1;
  //   while(index >= 0){
  //     var tweet = streams.home[index];
  //     var $tweet = $('<div></div>');
  //     $tweet.text('@' + tweet.user + ': ' + tweet.message);
  //     $tweet.appendTo($body);
  //     index -= 1;
  //   }

  // });

 $(document).ready(function(){
   var index = streams.home.length - 1;
   var $body = $('body');
   var date = new Date();

  // Display 

  var showTweets = function(username){
    var $timeline = streams.users;
    var $messages= $('<h4 class="list-group-item-heading"></h4>');
    for (var key in $timeline){
      if (key===username){
        for (i=0;i<$timeline[key].length; i++){
          $messages.text($timeline[key][i]);
          $messages.appendTo($body);
        }
      }
    }
  };

  $('button').on('click', function(){
   
    if (index>=0){
      var tweet = streams.home[index];
      var user = streams.user;
     // Display
     var elapsed = ($.now() - tweet.created_at)/1000;
     var elapsedSeconds = (elapsed % 60).toFixed(2);
     var $tweet = $('<h4 class="list-group-item-heading"></h4>');
     
      // Hyperlink Username
      $('<a>', {
        text: '@'+tweet.user+': ',
        click: function (){}
      }).appendTo($body);
      // Tweet
      $tweet.text(tweet.message + " - "+elapsedSeconds+" sec ago." );
      $tweet.appendTo($body);
      index -= 1;
    } else {
      $('button').text("No more tweets available!");
    }
  });

});
