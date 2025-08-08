//lexical scope
const myVar ="value1";
function app (){
    // const myVar ="value1";
    const myFunc = () => {
        // const myVar = "value89"; // if we comment this then myvar will search its value in its lexical scope
        console.log("hello from myFunc",  myVar);
    }

    console.log(myVar);
    myFunc();
    
}

app();