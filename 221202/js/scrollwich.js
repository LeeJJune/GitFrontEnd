$(document).ready(function(){
    let num1 = true;
    let num2 = true;
    let num3 = true;

    $(window).scroll(function() {
        let scrollTop = $(document).scrollTop();
    //box1
    if(scrollTop > 200 && num1 == true){
        num1 = false;
        $('.box1 > box01').delay(300).stop()
        .css({opacity: '0'}).animate({top:'500px', opacity: '1'});
        $('.box1 > box02').delay(500).stop()
        .css({opacity: '0'}).animate({top:'700px', opacity: '1'});
        $('.box1 > box03').delay(0).stop()
        .css({opacity: '0'}).animate({top:'400px', opacity: '1'});
    }
    else if(scrollTop < 100 && num1 == false){
        num1 = true;
        $('.box1 > box01').delay(300).stop()
        .animate({top:'100px', opacity: '0'});
        $('.box1 > box02').delay(500).stop()
        .animate({top:'100px', opacity: '0'});
        $('.box1 > box03').delay(0).stop()
        .animate({top:'100px', opacity: '0'});
    }
    //box2
    if(scrollTop > 900 && num2 == true){
        num2 = false;
        $('.box2 > box01').delay(500).stop()
        .css({opacity: '0'}).animate({top:'500px', opacity: '1'});
        $('.box2 > box02').delay(500).stop()
        .css({opacity: '0'}).animate({top:'700px', opacity: '1'});
        $('.box2 > box03').delay(500).stop()
        .css({opacity: '0'}).animate({top:'400px', opacity: '1'});
    }
    else if(scrollTop < 800 && num2 == false){
        num2 = true;
        $('.box2 > box01').delay(500).stop()
        .animate({top:'100px', opacity: '0'});
        $('.box2 > box02').delay(500).stop()
        .animate({top:'100px', opacity: '0'});
        $('.box2 > box03').delay(500).stop()
        .animate({top:'100px', opacity: '0'});
    }
    //box3

    })
})