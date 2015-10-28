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
       debugger;
     });
    }
 })

});


