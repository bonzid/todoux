document.addEventListener("DOMContentLoaded",function(){
    const listContainer=document.querySelector(".list");

    //fct pour ajouter le bouton "+" au chargement de la page
    function addPlusButton(){
        if (!document.querySelector(".list .plus")){ //on vérifie s'il n'y en a pas déjà un
            const plusButton=document.createElement("img");
            plusButton.classList.add("imgs_list","plus");
            plusButton.src="images/plus.png";
            listContainer.appendChild(plusButton);
        }
    }

    //ajout du premier "+"
    addPlusButton();

    listContainer.addEventListener("click",function (event){ //au clic,
        const target=event.target;

        if (target.classList.contains("imgs_list")){
            if (target.src.includes("plus.png")){
                //on ajoute une nouvelle tâche avec un symbole "heart" (has to be done)
                const newTask=prompt("Ajoute une tâche :"); //A MODIFIER je déteste

                if (newTask) {
                    const newItem=document.createElement("div");
                    newItem.innerHTML=`<img class="imgs_list" src="images/heart.png"> ${newTask}`;

                    //on insère avant le dernier "+"
                    listContainer.insertBefore(newItem,target);

                    //pour s'assurer qu'il y a toujours un "+" sur le post-it
                    listContainer.removeChild(target);
                    addPlusButton();
                }
            } else if (target.src.includes("heart.png")){
                //si on clique sur "heart", ça remplace par "check" (done)
                target.src="images/check.png";
            } else if (target.src.includes("check.png")){
                //si on clique sur "check", ça remplace par "heart" (retour arrière, has to be done)
                target.src="images/heart.png";
            }
        }
    });
});
