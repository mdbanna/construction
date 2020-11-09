$(document).ready(function(){
	
	
	
var $grid = $('.grid').isotope({
  itemSelector: '.grid-item',
  percentPosition: true,
  masonry: {
    // use outer width of grid-sizer for columnWidth
    columnWidth: 1
  }
})
// filter items on button click
$('.project_nav').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

//curosel//

//===========slider=============//

    $('.slider_wrap').owlCarousel({
    loop:true,
	autoplay:true,
	mouseDrag: false,
    touchDrag: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
		900:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
var dot = $('.slider_wrap .owl-dot');
dot.each(function(){
	var index = $(this).index();
	$(this).text(index + 1)
});
$(".slider_wrap").on("translate.owl.carousel", function(){	
            $(".slider_content h2").removeClass("animated fadeInUp").css("opacity", "0");
            $(".slider_content p").removeClass("animated fadeInDown").css("opacity", "0");
            $(".slider_content a").removeClass("animated fadeInDown").css("opacity", "0");
        });
        
        $(".slider_wrap").on("translated.owl.carousel", function(){
            $(".slider_content h2").addClass("animated fadeInUp").css("opacity", "1");
            $(".slider_content p").addClass("animated fadeInDown").css("opacity", "1");
            $(".slider_content a").addClass("animated fadeInDown").css("opacity", "1");
        });

//===========about_box_img=============//

    $('.about_box_img').owlCarousel({
    loop:true,
	animateIn: 'feedIn',
	animateOut: 'fadeOut',
	autoplayTimeout:5000,
	autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
		900:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

  //============claint_say============//
$('.clint_say').owlCarousel({
    loop:true,
    nav:true,
	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
	margin:32,
	autoplay:true,
	autoplayTimeout:7000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
		900:{
            items:1
        },
        1000:{
            items:2
        }
    }
})
	
 
 
    //===========team==========//
 $('.team').owlCarousel({
    loop:true,
	margin:32,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
		900:{
            items:2
        },
        1000:{
            items:4
        }
    }
})
   //===========clain==========//
    $('.clint_box').owlCarousel({
    loop:true,
	autoplay:true,
	autoplayTimeout:5000,
	margin:30,
    responsive:{
        0:{
            items:1
        },
		700:{
            items:3
        },
		767:{
            items:3
        },
		
        1000:{
            items:5
        }
    }
})
   
   
   
   
   
   
   
  
  
});
