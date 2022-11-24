window.onload = () =>{
    const btns = document.querySelectorAll('button');

    btns[0].onclick = () => {
        location.href = 'https://www.naver.com';
        //herf 는 뒤로가기 가능 하다 (history 저장함)
    }
    btns[1].onclick = () => {
        const urlInput = document.querySelector('input');
        urlInput.value = location.pathname;
    }
    btns[2].onclick = () => {
        location.reload();
    }
    btns[3].onclick = () => {
        location.replace("https://www.google.com");
        //replace 는 뒤로가기가 불가능 하다 (history 저장 안함)
    }
}