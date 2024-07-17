
const API = "https://668cb756099db4c579f00b64.mockapi.io/products";

let results = document.querySelector(".results")

async function getService(){
    try{

        const res = await fetch(API)

        const data = await res.json()
    
        console.log(data);
        showService(data)
    }catch(error){
        console.log(error);
    }

}
getService();
function showService (data){
    results.innerHTML = data.map((item)=> {
        return`
        <div class="service">
                    <img src="${item.image}" alt="">
                      <div class="info">
                          <span>${item.title}</span>
                        <span>${item.price}</span>
                    </div>
                    <div class="btns">
                        <button class="update">Update</button>
                        <button class="delete">Delete</button>
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
 
async function updateService(id) { 
    modal.style.display = "flex" 
 
    try{ 
        const res = await fetch(`${API}/${id}`) 
        const data = await res.json() 
 
        title.value = data.title 
        category.value = data.category 
        price.value = data.price 
        image.value = data.image 
 
 
       console.log(data); 
 
    }catch(error) { 
        console.log(error); 
    } 
} 
 
 function closeModal() { 
    modal.style.display = "none"; 
 } 
 
closeBtn.addEventListener("click", closeModal)