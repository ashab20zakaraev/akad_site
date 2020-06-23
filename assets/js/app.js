$(function(){

    var header = $("#header"),
        header__inner = $("#inner"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();

    /* Fixed header */
    checkScroll(scrollOffset)

    $(window).on("scroll", function(){

        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);

    });

    function checkScroll(scrollOffset) {

        if( scrollOffset >= introH ) {
            header.addClass("fixed");
            header__inner.addClass("fixed");
//            menu.addClass("fixed");
        }
        else {
            header.removeClass("fixed");
            header__inner.removeClass("fixed");
        }
    }

    /* Menu nav toggle */

    $("#nav-toggle").on("click", function(event){
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });


    /* Smooth scroll */

    $("[data-scroll]").on("click", function(event){
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("html, body").animate({
           scrollTop: blockOffset
        }, 800)

    });

});
