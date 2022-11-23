// 접근지정자 # 을 붙인다 privte 이랑 동일
class User{
    username;
    password;
    name;
    email;
}
// get, set 선언 방법
    // setUsername(username){
    //     this.#username = username;
    // }
    // getUsername(){
    //     return this.#username;
    // }

class UserMain{
    main() {
        let user = new User();

        user.username = '준일';
        user.password = '1234';
        user.name = 'junil';
        user.email = '123@123.com';

        console.log(user);
    }
}

window.onload = () =>{ 
    let userMain = new UserMain();

    userMain.main();
}