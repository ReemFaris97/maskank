/**************loader*************/
var ldoor = document.getElementById("ldoor");
var rdoor = document.getElementById("rdoor");
ldoor.style.transition = "1s";
rdoor.style.transition = "1s";
function load() {
    ldoor.style.width = "0";
    rdoor.style.width = "0";
    ldoor.style.border = "0";
    rdoor.style.border = "0";
}
$(document).ready(function () {
    var o;
    jQuery(window).load(function () {
        $(".loader").fadeOut(500, function () {
            $("body").css("overflow-y", "auto");
        });
    }),
        $("#nav-icon1").click(function () {
            $(this).toggleClass("open"), $(".navy").toggleClass("back-nav"),
                $(".nav-r").toggleClass("fixed-r"), $(".body-overlay").toggleClass("back"), $("body").toggleClass("body-mob")
        }), $(".body-overlay").click(function () {
            $(this).toggleClass("back"), $("#nav-icon1").toggleClass("open"), $(".navy").toggleClass("back-nav"),
                $(".nav-r").toggleClass("fixed-r"), $("body").toggleClass("body-mob")
        }), o = $("#scroll-top"), $(window).scroll(function () {
            $(this).scrollTop() >= 500 ? o.show() : o.hide()
        }), $("#scroll-top").click(function () {
            $("html,body").animate({
                scrollTop: 0
            }, 100)
        });
    (function ($) {
        function mediaSize() {
            if (window.matchMedia("(max-width: 767px)").matches) {
                $(".navy ul.nav li a").click(function () {
                    $("#nav-icon1").toggleClass("open"), $(".navy").toggleClass("back-nav"),
                        $(".nav-r").toggleClass("fixed-r"), $(".body-overlay").toggleClass("back"), $("body").toggleClass("body-mob")
                });
            }
        }
     /* Call the function */
     mediaSize();
     /* Attach the function to the resize event listener */
     window.addEventListener("resize", mediaSize, false);
 })(jQuery);
    ///////////// Font awesome 5 on pseudo elements
    window.FontAwesomeConfig = {
        searchPseudoElements: true
    }
    ///////////// current year 
    document.getElementById("currentYear").innerHTML = new Date().getFullYear();
    /**************** Fixed Navbar ****************/
    $(window).scroll(function () {
        var st = $(window).scrollTop();
        if (st > 80) {
            $(".navbar").addClass('fixd_navbar');
        } else {
            $(".navbar").removeClass('fixd_navbar');
        }
    });
    /*********wow .js **********/
    new WOW().init();

    /************** select2 ******/
    $('.select-2').select2();
    /********** video modal ****/
    // Gets the video src from the data-src on each button
    var $videoSrc;
    $(".video-btn").click(function () {
        $videoSrc = $(this).attr("data-src");
        console.log("button clicked" + $videoSrc);
    });
    // when the modal is opened autoplay it
    $("#myModal").on("shown.bs.modal", function (e) {
        console.log("modal opened" + $videoSrc);
        // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
        $("#video").attr(
            "src",
            $videoSrc + "?autoplay=1&showinfo=0&modestbranding=1&rel=0&mute=1"
        );
    });
    // stop playing the youtube video when I close the modal
    $("#myModal").on("hide.bs.modal", function (e) {
        // a poor man's stop video
        $("#video").attr("src", $videoSrc);
    });
    // document ready
});
/************ remove chat window ****/
$(".remov").click(function () {
    $(this).parent(".tooltip_txt").addClass("hidee");
});
/************** Chat Window *****/
$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 500) {
        $('.custom_tooltip .tooltip_txt').fadeIn();
    } else {
        $('.custom_tooltip .tooltip_txt').fadeOut();
    }
});
$(function () {
    $('.chat-header').click(function () {
        $('.chat-window').toggleClass('docked');
    });
    setInterval(function () {
        $('.progress-indicator').toggleClass('hide');
    }, 7846);
});
/********* Form Validation ************/
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();