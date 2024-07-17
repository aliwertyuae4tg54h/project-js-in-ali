// // let obj = {}
// let newObject = new Object();
// // console.log(obj);
// // console.log(newObject);
// let user = {name:"tilek"};
// user.name= "ali";
// user.age= 15 ;
// user["student"]= true
// delete user st
// console.log(user);
// let about = {
//     get :{ name: "tilek",
//     age: 24,
//     },
//     name: "tangsuluu",
//     address:{
//         number:34,
//         street:"manas",

//     },
// };
// console.log(about);



// let person = {
//     firsrtneme:"jon",
//     lastneme:"milly",
//     age:30,
//     address:{
//         street:"chuy",
//         number:139,
//     },

// };
// let {firsrtneme,address}= person;
// firsrtneme="kulpunay";
// console.log(address);



// let car = {
//     brande:"tayota",
//     modele:"kara",
//     yers:2024,
// }
// console.log(car);
// let car = {
//     brand: "Toyota",
//     model: "Corolla",
//     year: 2024,
//     start: function() {
//         console.log("Car started");
//     }
// };

// console.log(car);
// car.start();


// let person = {
//     name:"alice",
//     age:25,
//     istudent:true
// }
// console.log(person);
// let book = {
//     title :"javaScript partes",
//     author:"douglas",
//     year:2008
// };
// for(let key in book){
//     console.log(key + ":"+ book[key]);
// }

// let users = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 30 },
//     { name: "Charlie", age: 28 }
// ];

// function findUserByName(usersArray, name) {
//     for (let i = 0; i < usersArray.length; i++) {
//         if (usersArray[i].name === name) {
//             return usersArray[i];
//         }
//     }
//     return null; // если пользователь не найден
// }

// // Пример использования функции
// let user = findUserByName(users, "Bob");
// console.log(user); // { name: "Bob", age: 30 }

// let nonExistingUser = findUserByName(users, "David");
// console.log(nonExistingUser); // null
// let num = 123;
// let str = String(num);
// console.log(num.length);
// let obj = {x: 1, y: 2, z: 3};
// console.log(Object.keys(obj).length);\
let obj = {x: 1, y: 2, z: 3};
console.log(obj['x']);