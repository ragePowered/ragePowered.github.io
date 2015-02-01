jQuery(document).ready(function ($) {

    /* ========== Skillset ========== */
    $('.level-bar-inner').css('width', '0');
    $(window).on('load', function () {
        $('.level-bar-inner').each(function () {
            var itemWidth = $(this).data('level');
            $(this).animate({
                width: itemWidth
            }, 4000);
        });
    });

    /* Bootstrap Tooltip for Skillset */
    $('.level-label').tooltip();

    /* ========== Scroller ========== */
    $('.footer').on('click', function () {
        $('html, body').animate({scrollTop: $('body').offset().top}, 500);
    });
});

