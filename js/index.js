$(function(){
    var timer;
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

    /* 返回顶部 */
    $(window).scroll(function(){
        if ( $(window).scrollTop() >= 200 ) {
            $('.toTop a').slideDown();
        }else {
            $('.toTop a').slideUp();
        }
    });

    $('.toTop a').click(function () {
        $('html,body').animate({
            scrollTop: 0
        },500)
    });

    //推荐任务栏任务滚动
    function AutoScroll(obj) {
        var liHeight = $(obj).find("li:first").height();
        //$(obj).find("ul").scrollTop("-72px");
        console.log(liHeight);
        $(obj).find("ul:first").animate({
                marginTop: "-" + 104 + "px"
            },
            1500,
            function() {
                $(this).css({
                    marginTop: "0px"
                }).find("li:first").appendTo(this);
            });
    }
    timer = setInterval(function(){
        AutoScroll('.c-new');
    }, 2000);

    $('.c-new').hover(function(){
        clearInterval(timer);
    },function(){
        setInterval(function(){
            AutoScroll('.c-new');
        },2000)
    });
});