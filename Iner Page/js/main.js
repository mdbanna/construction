$(document).ready(function(){
	$('#menu').slicknav();
	
	
var $grid = $('.two_grid').isotope({
  itemSelector: '.grid_item',
  percentPosition: true,
  masonry: {
    // use outer width of grid-sizer for columnWidth
    columnWidth: 1
  }
})
// filter items on button click
$('.grid_button').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

//curosel//
//===========about_box_img=============//
 var owl = $(".about_box_img");
 
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
	  autoPlay:7000
 
  });
  //============claint_say============//
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
  
  //==========service claint say============///
  
  
   var owl = $(".service_claint_say");
 
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
	  autoPlay :5000,
      navigation : true,
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
 
  });
  
  
  
  
  
  
  
  
  
  
    //===========team==========//
   var owl = $(".team");
 
  owl.owlCarousel({
     
      itemsCustom : [
        [0, 1],
        [450, 1],
        [600, 3],
        [700, 3],
        [1000, 4],
        [1200, 4],
        [1400, 4],
        [1600, 4]
      ],
	  autoPlay :10000,
	  pagination : true
	  
 
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
  
  
  $('.progress .progress-bar').progressbar(); 




        $('.progress-bar').each(function () {

		var x = $(this).attr('data-transitiongoal');
		$(this).prev('.progress-value').append(x+'%');

		var heightVal = $(this).attr('data-barheight');

		$(this).css('height',heightVal+'px');
		$(this).parent().css('height',heightVal+'px');

        });





   $('.progress-bar').each(function() {


       $(this).animate({
           width: $(this).attr('aria-valuenow') + '%'
       }, 1500);


   });



   $('.skill-percent').each(function() {
	var data = $(this).attr('data-skill');
       $(this).append(data + "%");

   });
  
});
