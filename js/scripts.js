$(document).ready(function () {

     $('.meat-main-image-sl').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.meat-main-text-sl'
    });
    $('.meat-main-text-sl').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.meat-main-image-sl',
        dots: true,
        fade: true,
        centerMode: true,
        focusOnSelect: false,
        centerPadding: 0,
        arrows: false
    });
	
    $('.slider-new-products').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: true,
        dots:true,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
                
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots:false
              }
            }
        ]
    });
    $(".text-dot").dotdotdot({
		//	configuration goes here
	});
    
    $(window).resize(function(){
        $(".text-dot").dotdotdot({
		//	configuration goes here
	   });
    
    });
    $('.slider-top-news-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots:false,
        centerMode: false,
        centerPadding: 0,
        fade: true,
        asNavFor: '.slider-top-news-nav',
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows:false,
                  dots:true, 
                
              }
            }
         ]
    });
    $('.slider-top-news-nav').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots:true,
        centerMode: false,
        centerPadding: 0,
        fade: false,
        asNavFor: '.slider-top-news-for',
         responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows:false,
                  dots:false, 
                
              }
            }
         ]
    });
    
    $(".scroll-bott-line span").click(function(){
        $('body, html').animate({
            scrollTop: $(".main-slider-wrapp .main-slider").height()
        }, 700);
    });
    
    
    $(".scroll-top-line span").click(function(){
        $('body, html').animate({
            scrollTop: 0
        }, 700);
    });
    
    $(".dropdown-toggle").text($(".dropdown-menu span:first-child").html());
    
    $(".dropdown-menu span").click(function(){
        $(".dropdown-toggle").text($(this).html());
        
    });
    
    
    var win = $(window);
    var scrFunc = function () {
        var t = win.scrollTop(),
            e = win.height();
        $("[data-anim], .anim-show-block-bott").each(function (n, i) {
            var r = $(i).offset().top,
                s = t + .9 * e;
            s > r ? $(i).attr("data-anim", "true") : $(i).attr("data-anim", "false")
        })
    }
    scrFunc();
    
    $(window).scroll(function(){
        scrFunc();
    });
    
    //menu
    
    $('.new-dropdown-wrapp').click(function(e){
        e.stopPropagation();
        
        if(!$(this).find('.hidden-new-menu').hasClass('showed')){
            $('.hidden-new-menu').removeClass('showed');
            $(this).find('.hidden-new-menu').addClass('showed');
        }
        else{
            $('.hidden-new-menu').removeClass('showed');
            $(this).find('.hidden-new-menu').removeClass('showed'); 
        }
    });
    $('body,html').click(function(){
        $('.hidden-new-menu').removeClass('showed');
    });
    
    
    //subcat
    
    $('.one-type').click(function(){
        $('.one-type').removeClass('active');
        $(this).addClass('active');
        console.log($(this).index());
        $('.new-links-cat-wrapp .cats').removeClass('active');
        $('.new-links-cat-wrapp .cats').eq($(this).index()).addClass('active');
    });
    
});