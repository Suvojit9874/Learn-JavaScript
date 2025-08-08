// param destructureing

const person ={
    firstName: "suvo",
    gender:"male"
}


function details({firstName,gender}){
    console.log(firstName);
    console.log(gender);
}


details(person);