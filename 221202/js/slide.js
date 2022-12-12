 $(document).ready(function () {
            let current = 0; //현재 화면에 보이는 슬라이드 인덱스 번호
            let setIntervalId; //자동실행함수의 객체명


            //버튼에 의해 발생한 인덱스 값으로 애니메이션 작동
            $('.btns li').click(function () {
                let i = $(this).index();
                //console.log(i);
                movie(i)
            })

            //자동실행을 하는 함수를 제어하는 함수
            $('#slide').on({
                mouseover: function () {
                    clearInterval(setIntervalId);
                },
                mouseout: function () {
                    timer();
                }
            })


            //자동실행을 하는 함수
            timer();
            function timer() {
                //const 객체명 = setInterval(실행할함수(),시간); ->시간간격으로 함수를 반복 실행
                //clearInterval(실행함수객체명)
                //const 객체명 = setTimeout(실행할함수(), 시간); ->시간이 지나면 함수를 한번만 실행
                //clearTimeout(실행함수객체명)
                setIntervalId = setInterval(function () {
                    i = current + 1;//1 2 3 0 1 2 3 
                    if (i == 4) {
                        i = 0;
                    }
                    movie(i)
                }, 3000)
            }


            //애니메이션 함수
            function movie(n) {
                //동일한 버튼을 여러번 동작했을때 작동 제어하는 조건문
                if (current == n) return;

                currentEl = $('#viewer li').eq(current);
                nextEl = $('#viewer li').eq(n);
                currentEl.css({ left: '0%' }).animate({ left: '-100%' })
                nextEl.css({ left: '100%' }).animate({ left: '0%' });

                current = n;
                $('.btns li').removeClass('on')
                $('.btns li').eq(n).addClass('on')
            }
        })