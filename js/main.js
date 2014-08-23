
$(function  () {
    $('.cover,.cover-content, .cover-back').css({'height':($(window).height())+'px'});

    $(window).resize(function() {
        $('.cover,.cover-content, .cover-back').css({'height':($(window).height())+'px'});

    });
    var $cover = $('.cover.front');
    var $window = $(window),
    $image = $('.cover-content');
    $window.on('scroll', function() {
        var top = $window.scrollTop();

        if (top < 0 || top > 1500) { return; }
        $image
        .css('transform', 'translate3d(0px, '+top/3+'px, 0px)')
        .css('opacity', 1-Math.max(top/1000, 0));


         $cover.css('opacity', 1-Math.max(5*top/$(window).height(), 0));



      });





    $window.trigger('scroll');
})