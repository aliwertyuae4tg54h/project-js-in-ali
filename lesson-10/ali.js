let input = document.getElementById("input")
let addbutton = document.getElementById("addTodo")
let todaylist = document.getElementById("todaylist")
let tot = document.getElementById("faturelist")

function addtask(){
    let inputText= input.value;
    if (inputText.trim()!= ""){
 
    
    let taskItem = document.createElement("li");
    taskItem.innerHTML= `<input type"checkbox"/>${inputText}
    <button id="remove">remove</button>`;

    console.log(taskItem);
    todaylist.appendChild(taskItem);
    input.value="";
    let remove =document.querySelectorAll("#remove");
    remove.forEach((button)=>{
        button.addEventListener("click", function(){
            let listItem= button.closest("li");
            listItem.remove();
        });
    }
    );
    

}
}
addbutton.addEventListener("click", addtask)

function add(){
    let inputText= input.value;
    if (inputText.trim()!= ""){
    let taskItem = document.createElement("li");
    
    taskItem.innerHTML= inputText;
    tot.appendChild(taskItem);
    input.value="";
}}
addfuter.addEventListener("click", add)



