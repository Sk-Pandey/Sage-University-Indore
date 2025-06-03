const dropMenu = document.getElementById("drop-menu");
const menu = document.getElementById("menu");

dropMenu.addEventListener("click",()=>{
    menu.classList.toggle('hidden');
    if (menu.classList.contains('hidden')){
        dropMenu.innerHTML=` <strong id="drop-menu" class="text-4xl font-bold text-[blue] hover:cursor-pointer">&#8801</strong>`
        
    }else{
        dropMenu.innerHTML=`<strong id="drop-menu" class="text-xl font-semibold text-[blue] hover:cursor-pointer">&#10006</strong>`
    }
})
// Optional: custom JS validation stub (not needed unless you plan to add JS checks)
    function validateForm() {
      return true; // HTML5 required already handles validation
    }