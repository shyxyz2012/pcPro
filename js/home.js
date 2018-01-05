/**
 * Created by shy on 2018/1/3.
 */
$(function(){
    var i=0;
    var timer;
    //第一张图片显示，其它隐藏
    $(".pho").eq(0).show().siblings().hide();

    //图片每隔两秒自动轮播
    showTimer();
    function showTimer(){
        timer=setInterval(function(){
            i++;
            if(i==3){
                i=0;
            }
            show();
        },2000)
    }

    //当鼠标放在“phoChange”div上时清除轮播,离开时继续轮播
    $(".phoChange").hover(function(){
        clearInterval(timer);
    },function(){
        showTimer();
    });

    //当鼠标放在圆点上时，图片可以自动切换
    $(".tab").hover(function(){
        i=$(this).index();
        show();
        clearInterval(timer);
    },function(){
        showTimer();
    });

    function show(){
        $(".pho").eq(i).show().siblings().hide();
        $(".tab").eq(i).addClass("bg").siblings().removeClass("bg");
    }
})
