// --------------------------------------PAGE 1 ACCUEIL-------------------------------------------


// Api Fletch pour l'affichage des articles en page d'accueil
const url_endpoint = "http://localhost:3000/api/robots/";

async function appelApi(url){
    let res = await fetch(url)
    try {
        if (res.ok){
            return await res.json();
        }
    }
    catch(error) {
     console.log(error, "Une erreur est survenue");
    }
  }

  // --------------------------------------PAGE 2 SELECTION-------------------------------------------

  // Affichage des caractéristiques de chaque article
  function chargerCaracteristiques(data) {

    console.log(data);
        
    document.querySelector("#selection").innerHTML += 
    `   <article class="articleSelection">
            <h2>${data.name}</h2>      
            <h3>${data.username}</h3>      
            <p>Item price : ${(data.price)},00 $</p>
            <span class="text-nombre">Number article(s)</span>
            <input type="number" class="compteur" id="compteur" value="1" min="1">
            <p>${data.description}</p>
            <img src="${data.imageUrl}">             
        </article> 
    
        <button class="btn-ajouterPanier" id="btn-ajouterPanier"> Add to my command</button>    `;
  }

   // stockage dans le localstorage de chaque article sélectionné
  function stockageArticleSelection(data){
  let btnPanier = document.getElementById("btn-ajouterPanier");
              
  btnPanier.addEventListener('click', function(){
  
      let donnees = {
        identifiant: data._id,
        nom: data.name,                
        prix: data.price,              
      };      
  
      // Valeur du compteur
      const compteur = document.getElementById('compteur');
      let quantity = Number(compteur.value);
      donnees.quantité = quantity;
    
      // Si redondance d'un même article
      let redondance = listArticle.find(objet => objet.identifiant === donnees.identifiant);
  
      if(redondance){
  
        redondance.quantité +=  quantity;
        localStorage.setItem("articleSelectionne", JSON.stringify(listArticle));
  
      } else {
        
        listArticle.push(donnees);
        localStorage.setItem("articleSelectionne", JSON.stringify(listArticle));
  
      }
  
    })
  }

  
  // --------------------------------------PAGE 3 PANIER-------------------------------------------

  // Présentation des prix et articles du panier dans un tableau
  function tableauCalcul(stockage){
   
    for(let i = 0; i<stockage.length; i++){
            
        // Calcul du sous-total
        let calculST = `${stockage[i].prix}` *`${stockage[i].quantité}`;
    
        // Insertion des lignes du tableau récapitulatif des achats
        rev.innerHTML+=
            `                             
            <table>
                    <tr class="ligneAchat${i}">
                        <td>${stockage[i].nom}</td>
                        <td>${stockage[i].prix},00 $</td>
                        <td>${stockage[i].quantité}</td>
                        <td>${calculST},00 $<td>   
                        <button class="bouton_supprimer" data-index="${i}" id="bouton_supprimer1${i}"><img src="/poubelle.svg" alt="supprimer item" title="Supprimer cette ligne d'achat"></button>                 
                    </tr>
            </table>
            
            
            <article class="responsive">
                <p>Name : ${stockage[i].nom}</p>
                <p>Unit price : ${stockage[i].prix},00€</p>
                <p>Quantity : ${stockage[i].quantité}</p>
                <p> Subtotal : ${calculST},00 $</p>
                <button class="bouton_supprimer" data-index="${i}" id="bouton_supprimer2${i}"><img src="/poubelle.svg" alt="supprimer item" title="Delete this article"></button>
            </article>`
            
    
            // Calcul du total                   
            total += calculST ;
            
        }
        let NodeTotal = document.querySelector('#Total');
        NodeTotal.innerHTML = `Net total to be settled : ${total},00 $`;
    }

// Suppression d'une ligne d'achat au format desktop
function articleDeleteDesktop(stockage){

    for(let i = 0; i<stockage.length; i++){
            
        // const nodeLigneAchat = document.querySelector(`.ligneAchat${i}`);
        const nodePoubelle = document.querySelector(`#bouton_supprimer1${i}`);
        
        nodePoubelle.addEventListener('click', function(){
            let id = nodePoubelle.dataset.index;
            console.log(id)
            
            stockage.splice(id,1);
            localStorage.setItem('articleSelectionne',JSON.stringify(stockage));
            window.location.reload();
            
            // Calcul du sous-total après suppression d'une ligne
            let calculST = `${stockage[i].prix}` *`${stockage[i].quantité}`;
            
            // Calcul du total après suppression d'une ligne                  
            total -= calculST ;
            let NodeTotal = document.querySelector('#Total');
            NodeTotal.innerHTML = `net total to be settled : ${total},00 $`;
        }
    
    )}
    }
// Suppression d'une ligne d'achat responsive
function articleDeleteResponsive(stockage){

    for(let i = 0; i<stock.length; i++){
            
        // const nodeLigneAchat = document.querySelector(`.ligneAchat${i}`);
        const nodePoubelle = document.querySelector(`#bouton_supprimer2${i}`);
        
        nodePoubelle.addEventListener('click', function(){
            let id = nodePoubelle.dataset.index;
            console.log(id)
            
            stock.splice(id,1);
            localStorage.setItem('articleSelectionne',JSON.stringify(stock));
            window.location.reload();
            
            // Calcul du sous-total après suppression d'une ligne
            let calculST = `${stock[i].prix}` *`${stock[i].quantité}`;
            
            // Calcul du total après suppression d'une ligne                  
            total -= calculST ;
            let NodeTotal = document.querySelector('#Total');
            NodeTotal.innerHTML = `net total to be settled : ${total},00 $`;
        })
    }      
    }
// Apparition du bouton "Vider le panier" à partir du 2ème article
    function boutonViderPanierDeuxArticles(stockage){

        const nodeViderPanier = document.querySelector('#viderPanier');
        
        if(stock.length > 1){
        
            nodeViderPanier.innerHTML =`<button id="btn-empty">CLEAR</br></br><img src="/poubelle.svg" alt="supprimer item"></button>`
            // Vider complètement le panier
            const nodeBtnEmpty = document.querySelector('#btn-empty');   
        
            nodeBtnEmpty.addEventListener('click', function(){
                
                let NodeTotal = document.querySelector('#Total');
                localStorage.clear();
                rev.innerHTML ="";
                NodeTotal.innerHTML ="";
                nodeViderPanier.classList.add('disparition');
        
            })
        }
        }

        // Conditions du formulaire
        function alertChamps(){

            // // Valeur des champs
            const nom = document.querySelector('#nom').value;
            const prenom = document.querySelector('#prenom').value;
            const mail = document.querySelector('#email').value;
            const adresse = document.querySelector('#adresse').value;
            const ville = document.querySelector('#ville').value;
            const mailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]{2,}\.[a-z]{2,4}$/;

            // pop-up erreur de remplissage des champs
            let nodeInputNom = document.querySelector("#nom");
            let nodeInputPrenom = document.querySelector('#prenom');
            let nodeInputMail = document.querySelector('#email');
            let nodeInputAdresse = document.querySelector('#adresse');
            let nodeInputVille = document.querySelector('#ville');

                if(! (nom.length > 1)){
                    nodeInputNom.classList.add("red");
                    alert("Make sure the lastname contains at least 2 characters.");
                }
                
                if(! (prenom.length > 1) ){
                    nodeInputPrenom.classList.add("red");
                    alert("Make sure the firstname contains at least 2 characters.");
                }
                
                if(! (ville.length > 1) ){
                    nodeInputVille.classList.add("red");
                    alert("Make sure the city name contains at least 2 characters.");
                }
                
                if(! (adresse.length > 6)){
                    nodeInputAdresse.classList.add("red")
                    alert("Make sure the address contains at least 6 characters.");
                }
                
                if(! (mailReg.test(mail))){
                    nodeInputMail.classList.add("red")
                    alert("The email address is not correct.");
                }
        }

      
        //   Coloration des champs du formulaire    
        function colorationChamps(nodeInput,longueur) {

            nodeInput.addEventListener('input',function(e){
        
                let valeurChamps = e.target.value;
                if(valeurChamps.length > longueur){
                    nodeInput.classList.remove("red");
                    nodeInput.classList.add("green");
                } 
                else{
                    nodeInput.classList.remove("green");
                    nodeInput.classList.add("red");
                }    
             })
        
        }
        
        function colorationChampsMail(nodeInput){

        
            const mail = document.querySelector('#email').value;
            const mailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]{2,}\.[a-z]{2,4}$/;
        
            nodeInput.addEventListener('input', function(e){
        
                let valeurChampsEmail = e.target.value;
        
                if(mailReg.test(valeurChampsEmail)){            
                    nodeInput.classList.remove("red");
                    nodeInput.classList.add("green");
                }
                else{      
                    nodeInput.classList.remove("green");
                    nodeInput.classList.add("red");
                }
            })
        }
        
        // Envoi des donnees par l'API Fetch pour confirmation
        function envoiDonnees(url){

            // // Valeur des champs
            const nom = document.querySelector('#nom').value;
            const prenom = document.querySelector('#prenom').value;
            const mail = document.querySelector('#email').value;
            const adresse = document.querySelector('#adresse').value;
            const ville = document.querySelector('#ville').value;
            const mailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]{2,}\.[a-z]{2,4}$/;

            const contact = {
                firstName : prenom,
                lastName : nom,
                address : adresse,
                city : ville,
                email : mail,
            };
        
            console.log(contact);
        
            // Recupérer les identifiants de chaque article sélectionné 
            let produitsEnvoyes =[];
            for(let i = 0; i < stock.length; i++){
        
                produitsEnvoyes.push(stock[i].identifiant);
            }
            console.log(produitsEnvoyes);
        
            let requeteData = {contact: contact,products: produitsEnvoyes}
            
        
            // fetch pour une requête POST 
            let requetePost = {
                method : 'POST',
                body : JSON.stringify(requeteData),
                headers : { 'Content-Type' : 'application/json'},
            }
        
            fetch(url + "order", requetePost)
            .then((res) => res.json())
            .then((json) => {
                console.log(json);                   
                window.location.href = `../pages/confirmation.html?orderId=${json.orderId}`                       
            })
            .catch(() => {
                alert(err,'Une erreur vient de se produire.')
            })
        
        }

// --------------------------------------PAGE 4 CONFIRMATION-------------------------------------------

// Récupération du prix total
function prixTotalConfirmation(){
    const nodePrixFinal = document.querySelector('#confirmation h4');
let prixFinal = localStorage.getItem('articleSelectionne');
prixFinal = JSON.parse(prixFinal);

nodePrixFinal.innerHTML += `TRANSACTION AMOUNT : <strong>${prixFinal[0]},00 $</strong>`

localStorage.clear();
}

