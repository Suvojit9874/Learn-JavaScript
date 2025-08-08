// optional chaining 

 const user={
    firstName: "suvojit",
    // address: {houseNumber :"123"}
 }

 console.log(user.firstName);
//  console.log(user.address.houseNumber);  
 // this will print houseNumber but now think if houseNumber is not present in the object

 console.log(user?.address?.houseNumber);  // so use this