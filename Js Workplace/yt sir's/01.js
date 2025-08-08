const sam=Object.freeze({name:"sam",age:17});
console.log(sam);
sam.age=22;
console.log(sam);

//see that the age is not changed
//if you use 'use strict' then line no 3 will give you error;

//imparative style 
/*
const max= function(){
    console.log(Array.isArray(arguments));
    //since arguments is not an array so we can not use methods of array
    let large=0;
    for(let i=0;i<arguments.length;i++){
        if(arguments[i]>large) large=arguments[i];
    }
    return large;
}

console.log(max(2,4));
console.log(max(2,4,89));
console.log(max(87,21,64));
*/
//now using rest operator
const max= function(...nums){  //receiving side 
    // console.log(Array.isArray(nums));  //true
    return nums.reduce((large,e)=>e>large ? e :large);
}

console.log(max(2,4));
console.log(max(2,4,89));
console.log(max(21,64,1000));
//... is rest operator in parameter of function and it become spred while we pass value in it
const values=[1,5,78,6,24];
console.log(max(...values));  //sending side



