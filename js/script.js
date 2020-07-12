$(function() {


  // variables - for readability
  var $list, $newItemForm;

  // the "list" variable references the <UL> tag (index.html)
  $list = $('ul');
  
  // this variable references the <FORM> tag
  $newItemForm = $('#newItemForm');

  // what happens when the form is submitted
  $newItemForm.on('submit', function(e) {
    // first, don't take the default action.
    e.preventDefault(); 

    // then, grab the text value, and add a new list item
    var text = $('input:text').val();
    $list.append('<li>' + text + '</li>');

    // reset the text prompt to blank
    $('input:text').val('');
  });


  // when you click on a list item, delete it! (it's done).
  $list.on('click', 'li', function() {
    var $this = $(this);
    $this.remove();
  });

});