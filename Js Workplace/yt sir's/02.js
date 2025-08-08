/*
const sam=Object.freeze({name:"sam",age:17});
console.log(sam);
const olderSam={name:sam.name, age:sam.age+1};
console.log(olderSam);

//now the above solution  is not a good way
//see this
const newSam={...sam ,age:sam.age+2};
console.log(newSam);
*/


//default parameter
const greet=function(name , msg=`hi${name.length}`){
    return `${msg} ${name}`;
}
console.log(greet("jerry"));
console.log(greet("jerry","hello"));
console.log(greet("jerry",undefined));
console.log(greet("jerry",null));


//destructure
const names=["harry" ,"suvo"];
for(const entry of names.entries()){
    console.log(entry);
}
for(const [i,name] of names.entries()){
    console.log(`${i}-->${name}`);
}