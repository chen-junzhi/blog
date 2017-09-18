$(function(){
    var wi =$('.navbar-header').width();
    if( wi >0 ){
        $('#mynav ul div').removeClass('move-bg');
    }else {
        $('#mynav ul div').addClass('move-bg');
    };

    $('#mynav li a').click(function(){
        $(this).parent().addClass('active').siblings().removeClass('active');
    });
    $(window).resize(function(){
        wi =$('.navbar-header').width();
        if( wi >0 ){
            $('#mynav ul div').removeClass('move-bg');
        }else {
            $('#mynav ul div').addClass('move-bg');
        };
    });

    $('#mynav li').mouseover(function(){
        var width = $(this).outerWidth();
        var left = $(this).offset().left -$('#mynav ul').offset().left;
        $('.move-bg').css({
            "left" : left,
            "width" : width,
            "opacity" : "0.85",
            "transform" : "scale(1)"
        });
    });
    $('#mynav li').mouseleave(function(){
        $('.move-bg').css({
            "opacity" : "0",
            "transform" : "scale(0)"
        });
    });

});