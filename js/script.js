$(document).ready(function(){


    (function($) {

        $('#burger').click(function(e){
            e.preventDefault();
            $('.main-menu').toggleClass('main-menu__responsive');
        });


        $(window).resize(function() {
            if ($(window).width() > 767 && ($('.main-menu').hasClass('main-menu__responsive'))) {
                $('.main-menu').removeClass('main-menu__responsive');
            }
        });


    })(jQuery);
    
});