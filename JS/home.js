//슬라이더
$(document).ready(function(){
    $('.slider').bxSlider();
  });

//서브바 
$(function() {
    $('#sub').hide();

    $('#nav').hover(function() {
        $(this).parent().find('#sub').slideDown();
        $(this).parent().hover(function() {
            
        }, function() {
            $(this).parent().find('#sub').slideUp();
        });
    });
});


//스크롤업
function moveToTop() {
    window.scrollTo(0,0);
}


//메인nav2
$(document).ready(function () {
    var fixedScroll = $('#fixedNav').offset();
    $(window).scroll(function() {
        if($(document).scrollTop() > fixedScroll.top) {
            $('#fixedNav').addClass('fixIt');
        } else {
            $('#fixedNav').removeClass('fixIt');
        }
    });
});