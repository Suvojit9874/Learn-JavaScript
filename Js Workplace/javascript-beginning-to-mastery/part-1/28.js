
// rest parameters

function myFunc(a,b,...c){
    console.log(a);
    console.log(b);
    console.log(c);
}

myFunc(4,5,2,6,7,9,5,2,7855,486);









function addAll(...numbers){
    let total=0;
    for(let number of numbers){
        total =total +number;
    }
    console.log(total);
}

addAll(4,5,2,6,7,9,5,2,7855,486);