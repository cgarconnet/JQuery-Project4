$(document).ready(function() {
    // YOUR CODE HERE!

   $.ajax({
	   url: "https://api.myjson.com/bins/2sadq?pretty=1",
	   dataType: "json",
	   error: function(error) {
	    console.log(error); 
	   },
	   success: function(response) {
	     $.each(response.apartments, function(i, apartment) {
	     	var apartmentClass = apartment.city.toLowerCase();
	       	var listing = "<a href='#' class='list-group-item listing'><h4 class='list-group-item-heading'>"+ apartment.description + " / " + apartment.bedrooms + " BR / " + apartment.price + " / " + "</h4><p class='list-group-item-text'>" + apartment.neighborhood + "</p></a>"
	       	$(".apartments").append(listing);
	     });
	    }
	})

// Now we check the click on a filter
	$(".filter").click(function({
		var city = $(this).attr("id"); // on chat we click, we get the attribute Id

		//if not selected city as a class so we put "." +
		// then for them we want to hide values
		$(".listing").not("." + city).css("display", "none");

	});

});


