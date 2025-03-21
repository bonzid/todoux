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

    //création d'un champ de texte pour ajout des tâches
    const inputField=document.createElement("input");
    inputField.type="text";
    inputField.placeholder="Ajouter une tâche";
    inputField.classList.add("task-input");
    inputField.style.display="none"; //caché au chargement
    listContainer.appendChild(inputField);

    listContainer.addEventListener("click",function (event){ //au clic,
        const target=event.target;

        if (target.classList.contains("imgs_list")){
            if (target.classList.contains("plus")){ //A CHANGER POSITION DU CHAMP INPUT??? 
                //on affiche un champ input
                inputField.style.display="block";
                inputField.focus(); //et on met le curseur ds le champ
                //A CHANGER APPARENCE DU CHAMP INPUT (moche)

                //avec "entrée" on ajoute une tâche
                inputField.addEventListener("keydown",function(event){
                    if (event.key==="Enter"){
                        const newTask=inputField.value.trim();

                        if (newTask!==""){ //si l'entrée n'est pas vite,
                            const newItem = document.createElement("div");
                            newItem.innerHTML=`<img class="imgs_list" src="images/heart.png"> ${newTask}`; //on ajoute la nouvelle tâche

                            //on insère la tâche avant le nouveau "+"
                            listContainer.insertBefore(newItem,target);

                            //on cache et vide le champ après l'ajout de la tâche
                            inputField.style.display="none";
                            inputField.value="";

                            //on s'assure qu'il y a tjrs un "+" sur le post-it
                            target.remove();
                            addPlusButton();
                        }
                    }
                });
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
