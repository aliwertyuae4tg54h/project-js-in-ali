// let user = [
//     {
//         name:"ali",
//         age:18,
//     },
//     {
//         name:"tilek",
//         age:24,
//     }
// ];
// let box = document.querySelector(".box");
// let showUser = user.map((item)=> {
//     return `
//     <div>
//     <h3>${item.name}</h3>
//     <p>${item.age}</p>
//     </div>
//     `
// })
// box.innerHTML=showUser.join("")
// console.log(user);
const API = 'https://reqres.in/api/users';
const API2= 'https://api.github.com/users/';

let result = document.querySelector(".result");
let about = document.querySelector(".about");
let container = document.querySelector(".container");

function getUser (){
    fetch(API).then((response) => {
        return response.json()
    }).then((user) => {
        console.log(user);
        viewUser(user.data)
    })
}
getUser();

function viewUser(data){
let showUser =  data.map((item) => {
   return`
<div onclick = "getUserById('${item.id}')">
        <img src = "${item.avatar}" alt="">
        <h4>${item.first_name}</h4>
</div>
    `;
})
result.innerHTML = showUser.join("");
}


function getUserById(id){
    fetch(`https://reqres.in/api/users/${id}`).then((res)=>{
        return res.json()
    }).then((user)=> {
       about.innerHTML= `<div>
       <img src="${user.data.avatar}">
       </div>`;
    });
}

