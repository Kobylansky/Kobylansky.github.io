
//включение jQuery custom selectboxes
$("select").selectbox();



(function($) {
    $(function() {
        // Main-menu
        $('.dropdown').hover(
            function() {
                $(this).children('.submenu')
                    .slideDown()
                    .animate({backgroundColor: "rgb(225, 75, 75)"}, {duration: 800, queue: false});
            },
            function() {
                $(this).children('.submenu')
                    .slideUp()
                    .animate({backgroundColor: '#000'}, {duration: 800, queue: false});
            }
        );
    });

})(jQuery);