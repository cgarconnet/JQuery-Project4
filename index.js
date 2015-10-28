$(document).ready(function() {
    // YOUR CODE HERE!

   $.ajax({
   url: "https://api.myjson.com/bins/2sadq?pretty=1",
   dataType: "json",
   error: function(response) {
    console.log("error"); 
   },
   success: function(response) {
     $.each(response.apartments, function(i, apartment) {
       	var listing = "<a href='#' class='list-group-item'><h4 class='list-group-item-heading'>"+ apartment.description + " / " + apartment.bedrooms + " / " + apartment.price + " / " + "</h4><p class='list-group-item-text'>" + apartment.neighborhood + "</p></a>"
       	$('.apartments').append(listing);
     });
    }
 })

});


