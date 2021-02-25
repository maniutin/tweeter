/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {

  const createTweetElement = function(tweetObj) {
    let createdAt = moment(tweetObj.created_at).fromNow();
    const newElement = `<article class="tweet">
    <header class="tweet-header">
      <div class="avatar">
        <img src="${tweetObj.user.avatars}"> 
          <p>${tweetObj.user.name}</p>
      </div>
      <div class="handle">
        <p>${tweetObj.user.handle}</p>
      </div>
    </header>
    <div class="tweet-content">
      <p>${tweetObj.content.text}</p>
    </div>
    <footer class="tweet-footer">
      <p>${createdAt}</p>
      <div class="icons">
        <img src="/images/flag.png"> 
        <img src="/images/repost.png"> 
        <img src="/images/like.png"> 
      </div>
  
    </footer>
  </article>`;
    return newElement;
  };

  const renderTweets = function(tweets) {
    $(".all-tweets").empty();
    for (let tweet of tweets) {
      $('.all-tweets').append(createTweetElement(tweet));
    }
  };
  $('.tweet-form').on('submit', function(event) {
    event.preventDefault();
    if (!$('#tweet-text').val()) {
      alert("Hold yo horses!");
    } else if ($('#tweet-text').val().length > 140) {
      alert("Keep it short!");
    } else {
      $("#tweet-text").val($("<div>").text($('#tweet-text').val()).html())
      $.ajax({url: '/tweets',
        method: 'POST',
        data: $(this).serialize(),
      })
        .then(() => {
          loadTweets();
          $(".tweet-form").trigger("reset");
        });
      }
  });

  const loadTweets = function() {
    $.ajax({
      url: '/tweets',
      type: "GET",
      dataType: "json",
    })
      .then((response) => {
        return renderTweets(response);
      });
  };
});

