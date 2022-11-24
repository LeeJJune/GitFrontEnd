window.onload = () =>{
    console.log('class2.html: '+localStorage.username);
    // window.alert(localStorage.username);
    const btns = document.querySelector('button');
    btns[0].onclick = () => {
        print();
    }
    
    btns[1].onclick = () =>{
        history.back();
    }
}