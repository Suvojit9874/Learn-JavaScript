//Default parameter 

// function addTwo(a,b){
//     if(typeof b ==="undefined"){
//     b=0;}
//     return a+b;
// }

// if you dont give the value of b then twoSum will give you NaN so we defined it with 0

// you can do this using this 

function addTwo(a,b=0){    
    return a+b;
}
    

const ans = addTwo(4,     /*undefined*/     );
console.log(ans);