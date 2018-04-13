"use scrict"
class User{
    constructor(username, email, password){
        this.username = username;
        this.email    = email;
        this.password = password;
    }

    register(){
        console.log(this.username + ' is now registered.');
    }
}

// subclass
class Member extends User{
    constructor(username, email, password, memberPackage){
        super(username, email, password);
        this.package = memberPackage;
    }

    getPackage(){
        console.log(this.username + ' is subscribed to '+ this.package + ' Member Package');
    }
}

// for testing purpose!!!!!!
const paul = new User('Paul kitonyi', 'paulmucimah@gmail.com', 'password');
paul.register();

// testing sub class!!!!!
const mike = new Member('Mike', 'mike@gmail.com', 'password', 'standard');
mike.getPackage();