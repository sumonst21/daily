// $('button').on('mouseenter mouseleave', 
// 	function(){
// 	$('button').addClass('flip animated')
// });

/*
  Code by Gabriel Nunes
*/

function inIframe () { try { return window.self !== window.top; } catch (e) { return true; } }

var currentQuote = '', currentAuthor = '';
function openURL(url){
  window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
}
function getQuote() {
  $.ajax({
    headers: {
      "X-Mashape-Key": "eAzwY0DQf6mshba08wVdoOO7wFjtp18VwGnjsnM2lc1NBjFY1G",
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/',
    success: function(str) {
      if (typeof str === 'string') {
       r = JSON.parse(r); 
      }
      currentQuote = str.quote;
      currentAuthor = str.author;
      if(inIframe())
      {
        $('.tweetBtn').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes,timwheelercom&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor + '<i class="fa fa-quote-right"></i>'));
      }
      $(".quoteText").animate({
          opacity: 0
        }, 500,
        function() {
          $(this).animate({
            opacity: 1
          }, 500);
          $('#text').text(str.quote);
        });

      $(".quoteAuthor").animate({
          opacity: 0
        }, 500,
        function() {
          $(this).animate({
            opacity: 1
          }, 500);
          $('#author').html(str.author);
        });

      var color = Math.floor(Math.random() * colors.length);
      $("html body").animate({
        backgroundColor: colors[color],
        color: colors[color]
      }, 1000);
      $(".button").animate({
        backgroundColor: colors[color]
      }, 1000);
    }
  });
}
$(document).ready(function() {
  getQuote();
  $('.quoteBtn').on('click', getQuote);
  $('.tweetBtn').on('click', function() {
    if(!inIframe()) {
      openURL('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor + ' @timwheelercom'));
    }
  });
});