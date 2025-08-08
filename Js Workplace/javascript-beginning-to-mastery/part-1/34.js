// iterables
// jispe hum for of loop laga sakein 
//string , array are iterables

const firstname="suvojit";
for(let char of firstname){
    console.log(char);
};

const users={
    key1:"value1",
    key2:"value2"
}

// for(let user of users){
//     console.log(user);   //this will give error ,users is not iterables
// }


// array like object 
// jinke pas length property hoti hai 
// aur jinko hum index se access kar sakte hai
// example :- String 
console.log(firstname.length);
// set is not array like object



