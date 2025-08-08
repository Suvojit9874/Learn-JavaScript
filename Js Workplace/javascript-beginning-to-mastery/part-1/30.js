// callback function 

function myFunc2(){
    console.log("hello world");
}

function myFunc(callback){
   callback();
}

myFunc(myFunc2);