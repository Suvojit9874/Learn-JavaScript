class Animal{
    constructor(name , age ){
        this.name=name;
        this.age=age;
    }

    eat(){
        return `${this.name} is eating `;
    }
    isCute(){
        return true;
    }
}
class Dog extends Animal{
    constructor(name,age,speed){
        super(name,age);
        this.speed=speed;
    }
    eat(){
        return ` Modified eat : ${this.name} is eating `;
    }
}




const tommy = new Dog("tommy",1,100);
console.log(tommy);
console.log(tommy.isCute());
console.log(tommy.eat()); //overriding


