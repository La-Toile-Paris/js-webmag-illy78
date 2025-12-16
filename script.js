function getData() {
  fetch('data.json')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      /// EXAM: COMPLÉTEZ LE CODE ICI ! 
      const journal = data;
      console.log(journal);

      // TODO 1: REMPLIR LE HEADER

      let monJournal = data.title
      let containerMonJournal = document.getElementById("nom-journal")
      containerMonJournal.insertAdjacentHTML("beforeEnd", monJournal);

      let phraseAccroche = data.strap

      let containerPhraseAccroche = document.getElementById("phrase-accroche")

      containerPhraseAccroche.insertAdjacentHTML("beforeEnd", phraseAccroche);



      // TODO 2: REMPLIR LA NAVIGATION


      let topics = data.topics

      let  containerTopic = document.getElementById("themes-nav")

      topics.forEach(topic => {

        let topicsTitre = topic.icon+topic.title
        
        let topicsBtn =  `<div class="themes-nav" >
         <p class="nav-theme-btn"> ${topicsTitre}</p>
       
        </div> `
        
       containerTopic.insertAdjacentHTML("beforeEnd",topicsBtn );
      
      });
      
  

      // TODO 3: REMPLIR L'ARTICLE PRINCIPAL

    let heroImage= data.lead.imageHero
    let heroBadge = data.lead.topic
    let heroTitre = data.lead.headline
    let heroDescription = data.lead.body
    let heroAuteur = data.lead.author
    let heroDate = data.lead.date


    let heroCard = `<div class="container-full">
  <img class="hero-image" src="${heroImage}" alt="Image pour ${heroTitre}">
  <p class="theme-badge">${heroBadge}</p>
  <h2 class="hero-titre">${heroTitre}</h2>
  <p class="hero-description">${heroDescription}</p>
  <p class="hero-auteur">Par <strong>${heroAuteur} .</strong>${heroDate}</p>
</div>`;

    let containerHero = document.getElementById("article-principal")

    containerHero.insertAdjacentHTML("beforeend", heroCard);






      // TODO 4: REMPLIR LA GRILLE D'ARTICLES

      // TODO 5: REMPLIR LES THEMES

      // TODO 6: REMPLIR LES AUTEURS

      // TODO 7: REMPLIR LE BOUTON CALL TO ACTION


      /// FIN DU CODE
    })
    .catch((error) => console.error('Erreur lors de la lecture des données :', error));
}

getData();

// BONUS:
// Alert quand on appuie sur le bouton CTA
// Fonction de filtrage par thème
// Classer les articles par popularité ou notation

