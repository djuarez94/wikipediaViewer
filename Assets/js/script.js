$(document).ready(function() {

/*-------------------------------------
| Fade In Content
-------------------------------------*/
$('h1').delay(200).fadeTo(1000, 1);
$('img').delay(800).fadeTo(1000, 1);
$('input').delay(1500).fadeTo(1000, 1);
$('button').delay(1500).fadeTo(1000, 1);
$('.name').delay(2000).fadeTo(1000, 1);

  $('#slideButton').click(function() {
    $( "#results" ).toggle( "slide" );
    $('.alert').fadeIn(1000);
    preventDefault();
  });



  $('#search').click(function() {
        $('.alert').fadeOut(500);
    var searchTerm = $('#searchTerm').val();
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";

    $.ajax({
            type: "GET",
            url: url,
            async: false,
            dataType: "json",
            success: function(data) {
              $('#results').html('');
              $('#results').fadeIn(750);
                    for(var i=0;i<data[1].length;i++) {
                        $('#results').prepend("<li><a href= "+data[3][i]+">"+data[1][i]         +"</a><p>"+data[2][i]+"</p></li>");
                    }
              $('#searchTerm').val('');
            },
            error: function(errorMessage) {
                alert('Error!');
            }
        });
  });
  $('#searchTerm').keypress(function(e){
    if (e.which==13) {
          $('#search').click();
        }
  });
});