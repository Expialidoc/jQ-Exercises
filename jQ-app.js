
$('form').on('submit',function(evt){
    evt.preventDefault();
    let title = $( "input" ).first().val(); 
    let rating = $( "input" ).eq(1).val(); 
      
let button = $('<input id="remove" style="margin: 5px" type="button" value="remove">');
   $('.output').append('<li>' + button[0].outerHTML +'You rated ' + title + ' at ' + rating + '</li>');
});

$('.output').on('click','#remove', function(evt){
   $(evt.target).parent().remove();
})