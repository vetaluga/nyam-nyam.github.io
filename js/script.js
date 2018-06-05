$(document).ready(function(){
    $('.take-order').click(function(){
        $('.popup__controller').css({"top": $(window).scrollTop() + 100}).fadeIn();
        $('.popup__overlay').fadeIn();

        $('.popup__overlay').click(function(){
            $('.popup__overlay').fadeOut();
            $('.popup__controller').fadeOut();
        });
        $('.popup__close').click(function(){
            $('.popup__overlay').fadeOut();
            $('.popup__controller').fadeOut();
        });
    });

    $(window).scroll(function(){
        $('.popup__controller').css({"top": $(window).scrollTop() + 100});
    }).scroll();

    setInterval(function(){
        let dateNow   = new Date(),
                    timeBackH = 23 - dateNow.getHours(),
                    timeBackM = 59 - dateNow.getMinutes(),
                    timeBackS = 59 - dateNow.getSeconds();

                    if(timeBackH < 10){
                        timeBackH = '0' + timeBackH;
                    }
                    if(timeBackM < 10){
                        timeBackM = '0' + timeBackM;
                    }
                    if(timeBackS < 10){
                        timeBackS = '0' + timeBackS;
                    }

        $('#daily-timer-hours').text(timeBackH);
        $('#daily-timer-minutes').text(timeBackM);
        $('#daily-timer-seconds').text(timeBackS);
    })
    $('.primary-nav_btn').on('click', function(){
        $('.primary-nav_menu').slideToggle();
    });
    $(window).resize(function(){
        if($(this).width() > 991){
            $('.primary-nav_menu').removeAttr('style');
        }
    });
});