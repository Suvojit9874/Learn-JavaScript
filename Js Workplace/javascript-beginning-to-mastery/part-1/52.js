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

}

// we don't have contructor in Dog class but we are creating object . it can be confusing for java developer .but in js this is valid

const tommy = new Dog("tommy",1);
console.log(tommy);
console.log(tommy.isCute());