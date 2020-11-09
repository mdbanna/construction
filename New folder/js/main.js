$(document).ready(function(){
	$('#menu').slicknav();
	
	
var $grid = $('.grid').isotope({
  itemSelector: '.grid-item',
  percentPosition: true,
  masonry: {
    // use outer width of grid-sizer for columnWidth
    columnWidth: 1
  }
})
// filter items on button click
$('.priject_nav').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

//curosel//
 var owl = $(".team_box");
 
  owl.owlCarousel({
     
      itemsCustom : [
        [0, 1],
        [450, 1],
        [600, 2],
        [700, 3],
        [1000, 3],
        [1200, 4],
        [1400, 4],
        [1600, 4]
      ],
      navigation : true,
	  navigationText:["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"]
 
  });
  
   var owl = $(".blog_box");
 
  owl.owlCarousel({
     
      itemsCustom : [
        [0, 1],
        [450, 1],
        [600, 2],
        [700, 3],
        [1000, 3],
        [1200, 3],
        [1400, 3],
        [1600, 3]
      ],
	  
      navigation : true,
	  navigationText:["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"]
 
  });
    
   var owl = $(".clint_say_box");
 
  owl.owlCarousel({
     
      itemsCustom : [
        [0, 1],
        [450, 1],
        [600, 1],
        [700, 1],
        [1000, 1],
        [1200, 1],
        [1400, 1],
        [1600, 1]
      ],
	  autoPlay : 5000,
      navigation : true,
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
 
  });
  
   var owl = $(".clint_box");
 
  owl.owlCarousel({
     
      itemsCustom : [
        [0, 1],
        [450, 1],
        [600, 1],
        [700, 6],
        [1000, 6],
        [1200, 6],
        [1400, 6],
        [1600, 6]
      ],
	  autoPlay : 5000
     
 
  });
  
  
});
