$(document).ready(function(){
    let current = 0;
    let setIntervalId = 0;

    // 버튼에 의해 발생한 인덱스 값으로 애니메이션 작동
    $('.btns li').click(function(){
        let i = $(this).index();   
        // console.log(i);
        movie(i);
    })


    timer();

    //자동실행을 하는 함수를 제어하는 함수
    $('#slide').on({mouseover:function(){
            clearInterval(setIntervalId)
        },  
        mouseout:function(){
            timer();
        }
    });

    //자동실행을 하는 함수
    function timer(){
        // const 객체명 = setInterval(실행 할 함수(), 시간); > 시간 간격으로 함수를 반복 실행
        // clearInterval(실행함수객체명) 
        // setTimeout(실행 할 함수(), 시간); > 시간이 지나면 함수를 한번만 실행
        // clearTimeout(실행함수객체명)
    setIntervalId = setInterval(function(){
        let j = current + 1;
        if(j == 4){
            j = 0;
        }
        movie(j);
    }, 1000)};

    // 애니메이션 함수
    function movie(n){
    // 동일한 버튼을 여러번 동작 했을때 작동 제어 하는 조건문
    if(current == n) return;

    currentE1 = $('#view li').eq(current);
    nextE1 = $('#view li').eq(n);
    currentE1.css({left: '0%'}).animate({left: '-100%'});
    nextE1.css({left: '100%'}).animate({left: '0%'});

    current = n;
    $('.btns li').removeClass('on');
    $('.btns li').eq(n).addClass('on');
    }
})