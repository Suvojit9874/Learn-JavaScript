//1 
/*
let a=[]
let b=[]
console.log(a==b); //false
console.log(a===b); //false  
*/
// array r memory location equal kora hoche karon array refference type .And location of two array not same 


//2
/*
let a=[];
let b=a;
console.log(a==b); //true
console.log(a===b);  //true
*/
// the location of two array is same



//3
/*
let a=[20]
let b=[20]
console.log(a[0]==b[0]); 
console.log(a[0]===b[0]); 
*/

// 4
/*
let z=[1,2,3,4]
let a={name:"anil"};
console.log(...z);
*/


// 5
// console.log(typeof NaN);  //number

// 6
// console.log(5/0) //infinity

// 7
// console.log(10 - -10);  //20

// 8
// const set=new Set([1,1,2,3,4]);
// console.log(set);

// 9
// let data={name:"anil"};
// console.log(delete data.name); //true


// 10
// let data={name:"anil"};
// console.log(delete data); //we can't dlt a object like this

// 11 
/*
const data=["petar","anil","suvojit"];
const [y]=data;
console.log(y); //petar
*/

// 12
/*
const data=["petar","anil","suvojit"];
// 2nd value kivabe bar korbe ?
const [,y]=data;
console.log(y);
*/


// 13
/*
const data={name:"anil",age:31};
//how to get name without . operator
console.log(data["name"]);
// OR
const {name}=data;
console.log(name);
*/

// 14
/*
const data={name:"anil",age:31};
const info ={city:"kolkata",mail:"suvojit@gmail.com"};
// merge 2 object
const addition={...data,...info};
console.log(addition)
*/


// 15
//  const name ="Anil";
//  console.log(name());


// 16
// const result = false || {} || null; 
// console.log(result)
// jekhanei true value pabe seta return kore jabe .

// 17
// const result = false || null || ''; //true value na pele last er value ta nebe 
// console.log(result)


// 18
// const result =  [] || 0 || true; 
// console.log(result)

// 19
// console.warn(Promise.resolve(5));  //promise fulfilled


// 20
// JSON.parse(); 
// A. parses JSON to a javascript value


// 21
/*
let name ="Anil";
function getName(){
    console.log(name);
    let name ='Sidhu';
}

getName();  //Ans: error
*/

// 22
/*
let name ="Anil";
function getName(){
    console.log(name); //let scope is block level
}

getName();
*/


//23
// console.log(`${(x=>x)('I Love')} to program`);

//24
// function sumValue(x,y,z){
    // return x+y+z;
// }
// C. sumValue(...[1,2,3])    //// ans 6 asbe kon option  e 


// 25
/*
const name ='code step by step';
console.log(!typeof name === 'object');  //false
console.log(!typeof name === 'string');  //false
*/
// console.log(!typeof name) 


// 26
/*
const name ="Subscribe";
const age=21;
console.log(isNaN(name))  //tru
console.log(isNaN(age))  //false
*/

// 27
/*
let person ={name:"Anil"};
// what can modify person object 
Object.seal(person);  //seal korar por notun key value add kora jaina , existing name take edit korte parbo
console.log(person)
*/


// 28
/*
 let data =[2,9,0,10];
 //remove the first element
 data.shift()
 console.log(data);
 */


 //29
 /*
 let data =[2,9,0,10];
 //remove the last element
 data.pop()
 console.log(data);
 */


 // 30
 //check any value odd or even 
//  let a=30;
//  console.log(a%2===0)

// 31
/*
let data={
    name:"anil"
}
delete data.name;
console.log(data);
*/


//32
// let data ='true';
//convert data to boolean false value
// console.log(!typeof data)


//33
// let data ='true';
//convert data to boolean true value
// console.log(!!typeof data)


//34
// difference between map and forEach 
//ans:  map always kichu return kore , forEach kichu return korena.


//35
/*
let data =["anil","peter","suvo"];
delete data[1];
console.log(data);  // ['anil', empty, 'suvo']
console.log(data.length);  //dlt korar por o length 3 . 
*/



//36
/*
let a=2;
setTimeout(()=>{
    console.log(a)
},0);
a=100;
*/


//37
/*
let a=2;
let A=30;
console.log(A);
*/

//38
/*
let a ="Like"
let b ='Like'
console.log(a===b);
*/


//39
/*
let a =1;
let c=2;
console.log(--c ===a);
*/


//40
/*
let a =1;
let b=1;
let c=2;
console.log(b === a === --c); //false
*/


//41
// console.log(a); //undefined
// var a=5;


//42
// console.log(a); //error . not defined


//43
// console.log([[[[2]]]])


//44
//how to find OS name
// navigator.platform


//45
// let for =100 ; //reserved keyword


//46
/*
function fruit(){
    console.log(name);  //undefined
    console.log(price); //not defined error
    var name ='apple';
    let price=20;
}
fruit();
*/


// 47
/*
for(var i=0;i<3;i++){
    setTimeout(()=>console.log(i),1);   //3 3 3 
}
*/


// 48
/*
for(let i=0;i<3;i++){
    setTimeout(()=>console.log(i),1);   //0 1 2 
}
*/


// 49
// console.log(+true) //converted to a number
// console.log(typeof +true)


// 50
/*
let data ="size";
const bird ={
    size:"small"
}
console.log(bird[data])    //small
console.log(bird["size"])   //small
console.log(bird.size)      //small
console.log(bird.data)     // undefined
*/


// 51
/*
let c={name:"peter"}
let d=c;
c.name ="anil";
console.log(d.name);
*/


// 52
/*
let a=3;
let b=new Number(3);
console.log(typeof b)
console.log(a==b)
console.log(a===b)
*/


// 53
// let name;
// console.log(typeof name);  //undefined


// 54
/*
function friut(){
    console.log("wowowo")
}
friut.names="apple"    //name function er nijer property . friut.name korle fnction er nam e print hobe
console.log(friut.names)
console.log(friut.prototype)
friut();
*/


// 55
/*
function sum(a ,b){
    return a+b;
}

console.log(sum(1,"32"))
// console.log(1+"32")
*/


// 56
/*
let number=0;
console.log(number++)
console.log(++number)
console.log(number)
*/


//57
// console.log(typeof [])  //object

// 58
// const sum =eval('10*10+5');
// console.log(sum)


//59
/*
const person={name:"anil"}
function sayHi(age){
    return `${this.name} is ${age}`;
}
console.log(sayHi.call(person,20));
console.log(sayHi.bind(person,20));
console.log(sayHi.bind(person,20)());
*/


//60
/*
function sayHi(){
    return ()=> 0;
}
console.log(typeof sayHi())
console.log(typeof sayHi()())
*/

//61
// console.log(typeof typeof 1);


//62
// const number=[1,2,3]
// number[5]=11;
// console.log(number)


//63
// const number=[1,2,3]
// number[5]=number;
// console.log(number)   //must watch


//64
/*
console.log(!!null)  //false
console.log(!!'') //false
console.log(!!1)   //true
*/


//65 
/*
const firstPromise = new Promise((res,rej)=>{
    setTimeout(res,500,'one');
})
const secondPromise = new Promise((res,rej)=>{
    setTimeout(res,100,'two');
})

Promise.race([firstPromise,secondPromise]).then(res=>console.log(res))
// race 1st excute jeta hobe setai korbe 
*/


//66
/*
let person={name:'anil'}
let member=[person]
person=null;
console.log(member)
console.log(person)
*/

//67
// let data=3+4+'7';
// console.log(data)
// console.log(typeof data)


// 68
// console.log(typeof 3+4+'5')


// 69
// console.log(typeof (3+4+ +'5'))
// console.log(typeof (3+4+'5'))


// 70
/*
 let data =[1,2,3];
 data=data.map(num=>{
    if(typeof num == 'number') return;
    return num*2;
 })
 console.log(data)
 */


 //71
 /*
 function getInfo(member){   //call by referrence
    member.name='Anil'
 }
 const person={name:'anil'}
 getInfo(person)
 console.log(person)
 */


 //72
 

