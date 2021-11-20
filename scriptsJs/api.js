// Fonction de chargement des données contenues dans l'API
appelApi(url_endpoint)
    .then(value => {
        chargerDonnees(value);
    })

function chargerDonnees(value) {
    console.log(value);
    for (let i=0; i<value.length; i++){

        document.querySelector("#accueil").innerHTML += 
    `
        <article class="articleAccueil">
            <a href="../pages/selection.html?id=${value[i]._id}">
                <h2>${value[i].name}</h2>
                <h3>${value[i].username}</h3>
                <p>${(value[i].price)},00 $</p>
                <p>${value[i].description}</p>
                <img src="${value[i].imageUrl}">
            </a>
        </article> `
    }
}





