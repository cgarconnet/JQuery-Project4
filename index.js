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
	     	var apartmentClass = apartment.city.toLowerCase().replace(" ", "-");
	       	var listing = "<a href='http://map.google.com/?q=" + apartment.address + "' target=_new id="+ apartment.id + " class='list-group-item "+ apartmentClass + " listings'><h4 class='list-group-item-heading'>"+ apartment.description + " / " + apartment.bedrooms + " BR / " + apartment.price + " / " + "</h4><p class='list-group-item-text'>" + apartment.neighborhood + "</p></a>"
	       	$(".apartments").append(listing);
	     });
	    }
	})

// Now we check the click on a filter
	$(".filter").click(function() {
		var city = $(this).attr("id"); // on chat we click, we get the attribute Id
		$(".listings").show(); // we have first to show all values that we may have hidden before

		if (city !== "all") { //if all, we show all before and we hide nothing
		//if not selected city as a class so we put "." +
		// then for them we want to hide values
			$(".listings").not("." + city).css("display", "none");
		}
		//we have to remove the active, as we don't which one has it, we will remove to all
		$(".filter").removeClass("active");

		// then we add class active only to this
		$(this).addClass("active");		

	});

});


