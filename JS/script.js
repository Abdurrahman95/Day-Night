$(document).ready(function () {
    $('body').addClass('morning');
    $('.toggler').addClass('sun');
    $('.moon-spot').css("display", "none");

    $('.toggler').click(function () {
        if ($('body').hasClass('morning')) {

            $('body').removeClass('morning').addClass('night');
            $('.moon-spot').css("display", "inline-block");


        } else {
            $('body').removeClass('night').addClass('morning');
            $('.moon-spot').css("display", "none");

        }

    });
    $('.toggler').on("click", function(){
            if ($('body').hasClass('night')) {
        $('.toggler').removeClass('sun').addClass('moon');
    } else {
        $('.toggler').removeClass('moon').addClass('sun');
    }
    });


    
    

});
