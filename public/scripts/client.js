/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// const createTweetElement = function (tweetObj){
//   const newElement = `<article class="tweet">
//   <header class="tweet-header">
//     <div class="avatar">
//       <img src="${tweetObj.user.avatars}"> 
//         <p>${tweetObj.user.name}</p>
//     </div>
//     <div class="handle">
//       <p>${tweetObj.user.handle}</p>
//     </div>
//   </header>
//   <div class="tweet-content">
//     <p>${tweetObj.content.text}</p>
//   </div>
//   <footer class="tweet-footer">
//     <p>${tweetObj.created_at}</p>
//     <div class="icons">
//       <img src="/images/flag.png"> 
//       <img src="/images/repost.png"> 
//       <img src="/images/like.png"> 
//     </div>

//   </footer>
// </article>`
// }
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
}

// const $tweet = createTweetElement(tweetData);
const $tweet = $(`<article class="tweet">Hello world</article>`);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
$('article.tweet').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
