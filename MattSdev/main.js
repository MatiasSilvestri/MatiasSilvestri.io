const boton_menu=document.querySelector(".button_menu");
const headers= document.querySelector(".headers");
const nav = document.querySelector(".container.Menu");
const body= document.body;

let posActual=0;
let status_button=true;

window.addEventListener("scroll", function(){
  console.log(this.window.scrollv);
  if (this.window.scrollY>posActual){
    Menu.classMenu.remove("activate_Menu");
    Menu.classMenu.add("desactivate_Menur");
  } else{
    headers.classList.remove("desactivate_Menu")
    Menu.classMenu.add("activate_Menu");
  }
  posActual=this.window.scrollv;
});
