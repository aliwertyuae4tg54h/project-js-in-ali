//CRUD, POS  
// C = create 
// R = read, GET 
// U = update, PUT 
// D = delete,DELETE 
 
const API = "https://65ab6a1efcd1c9dcffc659a4.mockapi.io/api/v1/services"; 
 
let results = document.querySelector(".results") 
 
async function getService() { 
    try { 
 
        const res = await fetch(API) 
 
        const data = await res.json() 
 
        console.log(data); 
        showService(data); 
 
    } catch (error) { 
        console.log(error); 
    } 
 
 
} 
 
getService() 
 
function showService(data) { 
    results.innerHTML = data.map((item) => { 
        return` 
      <div class="service"> 
            <img src="${item.image}" alt=""> 
            <div class="info"> 
                <span>${item.title}</span> 
                <span>${item.price}</span> 
            </div> 
            <div>${item.category}</div> 
            <div class="btns"> 
                <button onclick="updateService('${item.id}')" class="update">Update</button> 
                <button onclick="deleteService('${item.id}')" class="delete">Delete</button> 
            </div> 
        </div> 
        ` 
    }).join("") 
} 
 
async function deleteService(id) { 
   try{ 
   const res = await fetch(`${API}/${id}`,  { 
    method: "DELETE", 
   }) 
   }catch(error) { 
    console.log(error); 
   } 
} 
 
let modal = document.querySelector(".modal") 
let closeBtn = document.querySelector("#close") 
let title = document.getElementById("title") 
let category = document.getElementById("category") 
let price = document.getElementById("price") 
let image = document.getElementById("image") 
let submitBtn = document.getElementById("submit") 
 
async function updateService(id) { 
    modal.style.display = "flex" 
 
    try{ 
        const res = await fetch(`${API}/${id}`) 
        const data = await res.json() 
 
        title.value = data.title; 
        category.value = data.category; 
        price.value = data.price; 
        image.value = data.image; 
 
      submitBtn.onclick = function() { 
        updateRes(data.id) 
      } 
 
       console.log(data); 
 
    }catch(error) { 
        console.log(error); 
    } 
} 
 
async function updateRes(id) { 
    const payload = { 
        title: title.value, 
        category: category.value, 
        price: price.value, 
        image: image.value, 
    } 
 
    try{ 
      const res = await fetch(`${API}/${id}`, { 
        method: "PUT", 
        headers: { 
            "Content-Type": "application/json", 
        }, 
        body: JSON.stringify(payload) 
      }) 
 
      if(res.status == 200) { 
        closeModal(); 
        getService() 
      } 
      console.log(res); 
    }catch(error){ 
        console.log(error); 
    } 
} 
 
 function closeModal() { 
    modal.style.display = "none"; 
 } 
 
closeBtn.addEventListener("click", closeModal)