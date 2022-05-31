/* Exercice - Move Your Div

Déplacer une div sur quatre points cardinaux quand on clique un bouton.  
Quand la div revient à son point d'origine, un modal s'affiche.  
Le modal disparait lorsqu'on recommence le cycle.  
Un deuxième bouton doit servir à masquer le modal.

/!\ IN ENGLISH FOR FUCK SAKE
*/

let move = document.getElementById("moveDiv");// Either you remove the ; here either you add it everywhere
let hide = document.getElementById("hideModal")// like here
let red = document.querySelector(".red");
let modal = document.querySelector(".modal")

hide.addEventListener("click", function(){
        modal.style.display = "none"
})

let clickNbr = 0;
move.addEventListener("click", function(){
    clickNbr++;
    
    switch (clickNbr) {
        case 1 :
            red.style.left = "100%"
            modal.style.display ="none"
            break;
        case 2 :
            red.style.right = "100%"
            red.style.top = "50%"
            break;
        case 3 :
            red.style.top = "50%"
            red.style.left = "0%"
            break;
        case 4 :
            red.style.left = "0%"
            red.style.top ="0%"
            modal.style.display = "block"
            clickNbr = 0
            break;
        default:
            break;
    }
})
