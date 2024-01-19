const myNav = document.getElementById("myNav");

const myOpen = document.getElementById("menu-btn");

const myClose = document.getElementById("close-btn");

function openMenu(){
   if(myNav.style.display==="flex") { 
    myNav.style.display="none"
   }

   else{
    myNav.style.display="flex"
   }
};

openMenu();

myOpen.addEventListener("click",openMenu);

myClose.addEventListener("click",openMenu);