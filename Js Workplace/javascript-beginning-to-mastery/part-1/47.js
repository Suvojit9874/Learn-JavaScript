function  hello(){
    console.log("hello world");
}

// javascript function ==> function + object

// console.log(hello.name);
// you can add your own properties 
 hello.myOwnProperty="this is my own property";
 console.log(hello);
 console.log(hello.myOwnProperty);


 // functon provides more usefull properties

 hello.prototype.abc="abc";
 hello.prototype.xyz="xyz";
 hello.prototype.func = ()=>console.log("i am arrow");
 hello.prototype.func25 = function(){
    return "i am arrow";
 }

 

 console.log(hello.prototype);
 // only function provide prototype property
 if(hello.prototype){
    console.log("protoype is present ")
}else{
    console.log("protoype is present ")
}

hello.prototype.func();