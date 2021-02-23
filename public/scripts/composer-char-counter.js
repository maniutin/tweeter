$(document).ready(function() {
  // --- our code goes here ---
  $("#tweet-text").on('keyup', function() {
    // console.log($("#tweet-text").val().length+1); 
    let $input = $(this);
    let $form = $input.closest('form');
    let $counter = $form.find('.counter');
    let length = $input.val().length;
    let count = 140 - length;
    $counter.html(count);
    if (count < 1){
      $counter.css('color', 'red')
    } else {
      $counter.css('color', '#545149')
    }
  });
});
