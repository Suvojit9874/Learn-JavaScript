//block Scope and function Scope 
// let and const are block scope 
// var is functional scope 


// let firstName="Debu";
{
    let firstName ="Suvojit";
    console.log(firstName);     // firstName ke ami sudu ei block er vetorei use korte parbo
}

{
    let firstName ="argha";
    console.log(firstName);
}

// console.log(firstName);



function myApp(){
    if(true){
        // let firstName ="Suvo";
        console.log(firstName);
    }
    console.log(firstName);
}

myApp();