function myFunc() {
    let counter=0
    return function fun() {
        if(counter<1){
            console.log("hi , you called me");
            counter++;
        }else{
            console.log("mai already ek bar call ho chuka hu");
        }
    }
}



const ans=myFunc();
ans();
ans();
const ans1=myFunc();
ans1();
ans1();

// this is called closure