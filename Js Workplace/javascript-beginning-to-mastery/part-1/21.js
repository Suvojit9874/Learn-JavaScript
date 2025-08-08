// object destructureing 
const band ={
    bandname:"fossils",
    famousSong: "Aro ekbar",
    anotherfamousSong:"hasnuhana",
    year1 :  "1999",

};
// let bandName= band.bandname;
// let famousSong= band.famousSong;
// console.log(bandName,famousSong);

//you can also do it by
// let {bandname ,famousSong}=band;
// console.log(bandname,famousSong);  

// if want to store the value in different variable then

let {bandname:var1 ,famousSong:var2 , ...restProps}=band;
console.log(var1,var2);  
console.log(restProps)   //so restProps is a object 

