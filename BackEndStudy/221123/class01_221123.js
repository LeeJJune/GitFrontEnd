// 접근지정자 # 을 붙인다 privte 이랑 동일
class User{
    username;
    password;
    name;
    email;

    constructor(username, password, name, email){
        this.username = username;
        this.password = password;
        this.name = name;
        this.email = email;
    }
    printName(){
        console.log(this.name = '님의 정보');
    }
}
// get, set 선언 방법
    // setUsername(username){
    //     this.#username = username;
    // }
    // getUsername(){
    //     return this.#username;
    // }

class UserMain{

    static #instace = null;
    static getInstace(){
        if(this.#instace == null) {
            this.#instace = new UserMain();
        }
        return this.#instace;
    }

    main() {
        let user = new User('준일', '1234', 'junil', '123@123.com');

        //user.username = '준일';
        //user.password = '1234';
        //user.name = 'junil';
        //user.email = '123@123.com';

        console.log(user);

        localStorage.username = user.username;
        console.log("username: "+localStorage.username);

        user.printName();
    }
}

window.onload = () => { 
    let userMain = new UserMain.getInstace();

    userMain.main();
}