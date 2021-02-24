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
    var rightNow = new Date(tweetObj.created_at);
    var res = rightNow.toISOString().slice(0,10).replace(/-/g,"");
    let createdAt = moment(res, "YYYYMMDD").fromNow();
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


  
  const $tweet = createTweetElement(tweetData);
  
  // Test / driver code (temporary)
  $('.all-tweets').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
});

