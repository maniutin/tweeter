$(document).ready(function() {
// implements the character counter
  $("#tweet-text").on('keyup', function() {
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
