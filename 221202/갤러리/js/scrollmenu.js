$(document).ready(function(){
    let menu = $('#top_menu > ul > li');
    let qmenu =$('#q_mn > .nav > li');
    let contents = $('#contents > div');
    

    menu.click(function(){
        let tg = $(this);
        let i = tg.index();

        let section = contents.eq(i);
        let target = section.offset().top;

        $('html, body').stop().animate({scrollTop: target});
    })
    qmenu.click(function(){
        let tk = $(this);
        let k = tk.index();
        console.log(k);

        let sc = contents.eq(k);
        let tt = sc.offset().top;

        $('html, body').stop().animate({scrollTop: tt});
    })

    // 스크롤 위치에 따라서 버튼 스타일 효과 적용
    $(window).scroll(function(){
        let sct = $(window).scrollTop();

    contents.each(function(){
        let th = $(this);
        let j = th.index();
        if(th.offset().top <= sct){
            menu.removeClass('on');
            menu.eq(j).addClass('on');
        }
    qmenu.each(function(){
        let tl = $(this);
        let l = tl.index();
        if(th.offset().top <= sct){        
        qmenu.removeClass('on');
        qmenu.eq(j).addClass('on');
        }
    })
    })


    $(function(){
        $(window).scroll(function(){
        let windowTop = $(window).scrollTop()+400;
        $('#q_mn').stop().animate({top: windowTop + "px"},100)
        }
    )
    })
    })
})