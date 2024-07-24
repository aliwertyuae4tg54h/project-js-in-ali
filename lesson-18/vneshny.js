let urlParams = new URLSearchParams(window.location.search);


let mealId = urlParams.get("id");


let API  =  `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;



let IMAGE_API = "https://www.themealdb.com/images/ingredients/"


async function getMeals(){
    try{
        const res = await fetch(API)
        const data = await res.json()
        console.log(data);
        showMeal(data.meals[0])
    }catch(error){
        console.log(error);

    }
}
getMeals();


let result = document.querySelector(".kyrgyz");
function showMeal(data){

let showUrl = "";

for(let i=0; i<20; i++){
    const findUrl = data["strIngredient"+i];
    if(findUrl){
        showUrl += `
                    <div class="kyrgyz4"> 
                        <img src="${IMAGE_API + findUrl}.png" alt=""> 
                        <p>${findUrl}</p> 
                    </div> 
        `;
    }
}


result.innerHTML=`
            <div class="kyrgyz0"> 
                <div class="kyrgyz1"> 
                    <img src="https://www.themealdb.com/images/icons/flags/big/32/ru.png" alt=""> 
                    <h1> Lamb Pilaf (Plov)</h1> 
                    
                </div> 
                <div class="kyrgyz2"> 
                    <img src="${data.strMealThumb}" alt=""> 
                    <p>RICE</p> 
                    <div class="kyrgyz-1"> 
                        <img src="https://www.themealdb.com/images/icons/Arrow-left.png" alt=""> 
                        <img src="https://www.themealdb.com/images/icons/Arrow-Right.png" alt=""> 
                    </div> 
                </div> 
            </div> 
            <!-- -------------- --> 
            <div class="kyrgyz3"> 
                 
                <p>Ingredients</p> 
 
                <div class="kyrgyz01"> 
                    ${showUrl}
                  
                </div>

            </div> 
`;
}