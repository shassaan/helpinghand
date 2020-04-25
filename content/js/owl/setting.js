$(document).ready(function() {
    /* Testimonial
    --------------------------------------------*/
    var testimonial = $("#owl-testimonial");
    testimonial.owlCarousel({
        dots:false,
        loop:true,
        autoplay:true,
        animateOut: 'slideOutDown',
        animateIn: 'slideInUp',
        items:1
    });
    $(".next-testimonial").on("click", function(){
        testimonial.trigger('next.owl.carousel');
    });
    $(".prev-testimonial").on("click", function(){
        testimonial.trigger('prev.owl.carousel');
    });
    
    /* Blog
    --------------------------------------------*/
    var blog = $('#owl-blog');
    blog.owlCarousel({
        loop:true,
        dots:false,
        margin:30,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });
    $(".next-blog").on("click", function(){
        blog.trigger('next.owl.carousel');
    });
    $(".prev-blog").on("click", function(){
        blog.trigger('prev.owl.carousel');
    });
    
    /* Blog
    --------------------------------------------*/
    var client = $('#owl-client');
    client.owlCarousel({
        loop:true,
        dots:false,
        margin:30,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });
    $(".next-client").on("click", function(){
        client.trigger('next.owl.carousel');
    });
    $(".prev-client").on("click", function(){
        client.trigger('prev.owl.carousel');
    });
});

