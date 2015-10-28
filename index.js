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
	       	var listing = "<a href='#' id="+ apartment.id + " class='list-group-item "+ apartmentClass + " listings'><h4 class='list-group-item-heading'>"+ apartment.description + " / " + apartment.bedrooms + " BR / " + apartment.price + " / " + "</h4><p class='list-group-item-text'>" + apartment.neighborhood + "</p></a>"
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


	$(document).on("click", ".listings", function(){
		// This function will allow us to call google when clicking on each listing
		// We have to target the document and not the .listing.click .. because such 
		// element do not exist when the document is first loaded

//		console.log($(this).attr("id"));
		var id = $(this).attr("id"); //we get the Id we just collected in the code above under listing

	   $.ajax({
		   url: "https://api.myjson.com/bins/2sadq?pretty=1",
		   dataType: "json",
		   error: function(error) {
		    console.log(error); 
		   },
		   success: function(response) {
		   		var selectedApartment = $.grep(response.apartments, function(apartment){
		   			return apartment.id == id;
		   		})
		   		//debugger;
		   		// before selected Apartment was an array of Object.
		   		// so we can access the Object thru selectedApartment[0]
		   		var address = selectedApartment[0].address;
		   		window.open("http://map.google.com?q=" + address);
		     }
		});
	});
});


