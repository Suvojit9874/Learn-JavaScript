class person{
    [Symbol.for('play')](){
        console.log("playing")
    }
}
const sam=new person();
// sam.play();
const playMethod=Symbol.for('play');
sam[playMethod]();

//in an arrow function , all variable (including this and arguments ) are lexically scoped