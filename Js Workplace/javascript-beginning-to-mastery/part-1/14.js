const fruits =["apple","mango","grapes","fruits4"];
const fruits4=[];
console.log(fruits);
for(let fruit of fruits){
    fruits4.push(fruit.toUpperCase());      //for of loop
}

for(let index in fruits4){
    console.log(fruits4[index]);        //for in loop
}




