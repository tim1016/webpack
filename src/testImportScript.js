// class Func {
//     constructor(){

//     }

//  add (a,b)  {console.log(a + b)};


//  subtract (a,b)  {console.log(a - b)};


//  multiply (a,b)  {console.log(a * b)};


//  divide (a,b)  {console.log(a / b)};


// }

// export var obj = new Func();

export const addition = (a,b) => (a+b);
export const minus = (a,b) => (a-b); 

const user = {
    id:1016,
    name:"anthony"
};

const advancedUser = {
    ...user,
    age:21
};

console.log(advancedUser);  
