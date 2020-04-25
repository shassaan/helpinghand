(function($) {
	'use strict';	
	/*
	navBar
	=========================== */
	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();
		if(scrollTop != 0){
			$("header").addClass("top-nav-collapse");
            $(".scroll-top").fadeIn(500);
			return false;
		} else {
			$("header").removeClass("top-nav-collapse");
            $(".scroll-top").fadeOut(500);
			return false;
		}
	});

    /*
	Video play
	=========================== */
	$("#ytplayer").css({'opacity':'0','filter':'alpha(opacity=0)'});	
	$( ".start-video" ).on("click",function(){
		$('#ytplayer').fadeTo(900, 1);$( "img.img-video" ).fadeOut(800);
	});
	$(document).on('click', '.start-video', function () {
		$(this).fadeOut(800);
		player.playVideo();
	});
    
    /*
	Accordion
	=========================== */
    function toggleChevron(e) {
        $(e.target)
            .prev('.panel-heading')
            .find("i.indicator")
            .toggleClass('icon-minus icon-plus');
    }
    $('#accordion').on('hidden.bs.collapse', toggleChevron);
    $('#accordion').on('shown.bs.collapse', toggleChevron);
    
    /*
	Gallery
	=========================== */
    function imgGallery(){
        $(".wrap-gallery").each(function(){
            var getHeight = $(this).outerHeight();
            $(".wrap-content", this).css("height", getHeight + "px");
            
            $(this).on("mouseenter", function() {
                $(".shadow", this).stop().fadeIn();
                $(".content h5", this).stop().animate({opacity : 100,top : 0});
                $(".content ul.action li.zoom", this).stop().animate({opacity : 100,left : 0});
                $(".content ul.action li.link", this).stop().animate({opacity : 100,right : 0});
                return false;
            });
            $(this).on("mouseleave", function() {
                $(".shadow", this).stop().fadeOut();
                $(".content h5", this).stop().animate({opacity : 0,top : "-20%"});
                $(".content ul.action li.zoom", this).stop().animate({opacity : 0,left : "-30%"});
                $(".content ul.action li.link", this).stop().animate({opacity : 0,right : "-30%"});
                return false;
            });
        });
    }
    $(window).on("load", imgGallery);
    $(window).on("resize", imgGallery);
	
    /* Twitter Feed
    --------------------------------------------*/
	$('.tweecool').tweecool({
		//settings
        username : 'envato', 
		limit : 1,
		profile_image : false,
		show_time : false,
		show_media : false,
		show_media_size: 'thumb'  //values: small, large, thumb, medium 
	});
	
    /* Ajax contact form with validation
    =========================== */
    $("#mycontactform").validate({
		 submitHandler: function() {
            $("#submit").addClass("disabled");
            $(".status-progress").html("<div class='wow rotateIn' data-wow-iteration='infinite' data-wow-duration='2s'><i class='icon-hour-glass'></i></div> ");
			$.post("contact/email.php", $("#mycontactform").serialize(),  function(response) {
				$('#success').html(response);
                $("#submit").removeClass("disabled");
                $(".status-progress").html("");
			});
			return false;
		}							 
	});
    $("#validateform").validate({
		 submitHandler: function() {
            $("#submit").addClass("disabled");
            $(".status-progress").html("<div class='wow rotateIn' data-wow-iteration='infinite' data-wow-duration='2s'><i class='icon-hour-glass'></i></div> ");
			return false;
		}							 
	});
    
    /* prettyPhoto
    --------------------------------------------*/
    $(".wrap-gallery:first a[data-pretty^='prettyPhoto']").prettyPhoto({animation_speed:'normal',theme:'pp_default',slideshow:3000, autoplay_slideshow: false});
	$(".wrap-gallery:gt(0) a[data-pretty^='prettyPhoto']").prettyPhoto({animation_speed:'fast',slideshow:10000, hideflash: true});

})(jQuery);

