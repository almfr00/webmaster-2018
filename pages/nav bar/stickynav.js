    $("document").ready(function ($) {

        // On document load get the position of the div u want to stick on certain position
        var offsets = document.getElementById('myTopnav').getBoundingClientRect();

        // Get position from top of browser
                var topoffsets = offsets.top;

                // Binding fuction to windows scroll event
                $(window).bind('scroll', function () {

                    if ($(window).scrollTop() > topoffsets + 10) {

                               $("#myTopnav").css({ top: 0, left: '20px', right: '20px', margin: 0, width: 'calc(100% - 40px)', position: 'fixed' });

                            } else {
                               $("#myTopnav").css({ top: '', left: '', right: '', margin: '', width: '', position: '' });
                            }

                    if ($window.matchMedia( "(min-width: 600px)" )) {

                        $("myTopnav").css({ top: 0, margin: 0, width: '100%', position: 'fixed' })

                            } else {
                               $("#myTopnav").css({ top: '', left: '', right: '', margin: '', width: '', position: '' });
                            }
                });
    });