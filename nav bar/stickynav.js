    $("document").ready(function ($) {

        // On document load get the position of the div u want to stick on certain position
        var offsets = document.getElementById('myTopnav').getBoundingClientRect();

        // Get position from top of browser
                var topoffsets = offsets.top;

                // Binding fuction to windows scroll event
                $(window).bind('scroll', function () {

                    if ($(window).scrollTop() > topoffsets) {

                               $("#myTopnav").css({ top: 0, position: 'fixed' });

                            } else {
                               $("#myTopnav").css({ top: '', position: '' });
                            }
                });
    });