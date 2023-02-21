$('body').scrollspy({target: "#navbarSupportedContent"})

$(function () {
    // Add smooth scrolling to all links in navbar + footer link
    $(".navbar a, footer a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        console.log(this.hash);
        if (this.hash !== "") {

            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function () {
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
    $(window).scroll(function () {
        var scrollDistance = $(window).scrollTop();
        $('section').each(function (i) {
            if ($(this).offset().top <= scrollDistance) {
                var sectionId = $(this).attr('id');
                history.replaceState(null, null, '#' + sectionId);

                $('.navbar-nav li.active').removeClass('active');
                $('.navbar-nav li').eq(i).addClass('active');
            }
        });
    }).scroll();
});



$(window).on('scroll', function () {
    $(".slideanim").each(function () {
        var pos = $(this).offset().top;

        var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
            $(this).addClass("slide");
        }
    });
});