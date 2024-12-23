const Buttton = document.querySelector(".btn");

Buttton.addEventListener("mouseover" , (Event) => {
   const x = Event.pageX - Buttton.offsetLeft;
   const y =Event.pageY - Buttton.offsetTop;
   Buttton.style.setProperty("--xPos" , x + "px");
   Buttton.style.setProperty("--yPos" , y + "px");
})