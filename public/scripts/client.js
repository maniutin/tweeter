/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]

  const createTweetElement = function (tweetObj){  
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
  </article>`
  return newElement;
  }

const renderTweets = function(tweets) {
  for (let tweet of tweets){
    $('.all-tweets').append(createTweetElement(tweet));
  }
}

$('.tweet-form').on('submit', function (event) {
   event.preventDefault();
  if (!$('#tweet-text').val()){
    alert("Hold yo horses!")
  } else if ($('#tweet-text').val().length > 140){
    alert("Keep it short!")
  } else {
  $.ajax({url: '/tweets', 
  method: 'POST', 
  data: $(this).serialize(), 
  });
  }
 })

 const loadTweets = function(){
  $.ajax({
    url: '/tweets',
    type: "GET",
    dataType: "json",
  })
  .then((response) => {
    renderTweets(response)
    // console.log(response)
  });
  }
  loadTweets();
});

