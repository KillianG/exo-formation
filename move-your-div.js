/* Exercice - Move Your Div

Déplacer une div sur quatre points cardinaux quand on clique un bouton.  
Quand la div revient à son point d'origine, un modal s'affiche.  
Le modal disparait lorsqu'on recommence le cycle.  
Un deuxième bouton doit servir à masquer le modal.

*/
let move = document.getElementById("moveDiv");
let hide = document.getElementById("hideModal")
let red = document.querySelector(".red");
let modal = document.querySelector(".modal")

let clickNbr = 0;
hide.addEventListener("click", function(){
        modal.style.display = "none"
})
move.addEventListener("click", function(){
    clickNbr++;
    
        
    if (1 === clickNbr){
      red.style.left = "100%"
      modal.style.display ="none"
    };
    if (2 === clickNbr){
            red.style.right = "100%"
            red.style.top = "50%"
    };
    if (3 === clickNbr){
            red.style.top = "50%"
            red.style.left = "0%"
    }
    if (4 === clickNbr){
            red.style.left = "0%"
            red.style.top ="0%"
            modal.style.display = "block"
            clickNbr = 0
    }
   
})
