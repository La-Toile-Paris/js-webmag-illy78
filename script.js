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

      let monJournal          = data.title
      let containerMonJournal = document.getElementById("nom-journal")

      containerMonJournal.insertAdjacentHTML("beforeend", monJournal);

      let phraseAccroche          = data.strap
      let containerPhraseAccroche = document.getElementById("phrase-accroche")

      containerPhraseAccroche.insertAdjacentHTML("beforeend", phraseAccroche);


      // TODO 2: REMPLIR LA NAVIGATION

      let topics          = data.topics
      let containerTopic = document.getElementById("themes-nav")

      topics.forEach(topic => {
        let topicsTitre = topic.icon + topic.title
        let topicsBtn = `
          <button class="nav-theme-btn"> ${topicsTitre}</button>`

        containerTopic.insertAdjacentHTML("beforeend", topicsBtn);

      });


      // TODO 3: REMPLIR L'ARTICLE PRINCIPAL

      let heroImage       = data.lead.imageHero
      let heroBadge       = data.lead.topic
      let heroTitre       = data.lead.headline
      let heroDescription = data.lead.description
      let heroAuteur      = data.lead.author
      let heroDate        = data.lead.date
      let heroTags        = data.lead.tags
      let heroCard = `<div>
        <img id="hero-image" src="${heroImage}" alt="Image pour ${heroTitre}">
        <article class="hero-info">
            <span class="theme-badge">${heroBadge}</span>
            <h1>${heroTitre}</h1>
            <p id="hero-description">${heroDescription}</p>
            <p id="hero-auteur">Par <strong>${heroAuteur}</strong> | ${heroDate}</p>  
            <p>${heroTags}</p>
            <button class="read-article-btn">Lire article</button>
        </article>

       </div>`;

      let containerHero = document.getElementById("article-principal")

      containerHero.insertAdjacentHTML("beforeend", heroCard);



      // TODO 4: REMPLIR LA GRILLE D'ARTICLES
      let containerArticle = document.getElementById("articles-grid")
      let stories = data.stories

      stories.forEach(story => {
        let storiesImage        = story.image
        let storiesBadge        = story.topic
        let storiesTitre        = story.headline
        let storiesDescription  = story.description
        let storiesAuteur       = story.author
        let storiesDate         = story.date
        let storiesTags         = story.tags
        let articleCard = `<article class ="article-card">
          <img src="${storiesImage}" alt="Image pour ${storiesTitre}">
          <div   class="article-content"  >
                  <span class="theme-badge">${storiesBadge}</span>
                  <h3 >${storiesTitre}</h3>
                  <p>${storiesDescription}</p>
                  <p>Par <strong>${storiesAuteur}</strong>  | ${storiesDate}</p>
                  <p>${storiesTags}</p>
                  <button class="read-article-btn">Lire article</button>
          </div>
        </article>`;

        containerArticle.insertAdjacentHTML("beforeend", articleCard);

      });


      // TODO 5: REMPLIR LES THEMES

      let containerTopics = document.getElementById("themes-list")
      let themes          = data.topics

      themes.forEach(theme => {
        let topicsIcon = theme.icon
        let topicsTitre = theme.title
        let topicsDescription = theme.description
        let topicCard = `<article class ="theme-item">
          <div class="theme-icon">${topicsIcon}</div>
          <h3>${topicsTitre}</h3>
          <p>${topicsDescription}</p>
      </article>`;


        containerTopics.insertAdjacentHTML("beforeend", topicCard);

      });



      // TODO 6: REMPLIR LES AUTEURS

      let containerAuteurs = document.getElementById("authors-list")

      let auteurs = data.contributors

      auteurs.forEach(auteur => {
        let auteurImage     = auteur.image
        let auteurNom       = auteur.nom
        let auteurPrenom    = auteur.prenom
        let auteurRole      = auteur.expertise
        let auteurBio       = auteur.bio
        let auteurArticles  = auteur.articles
        let auteurFollowers = auteur.followers


        let auteursCard = `<div class ="author-card">

            <img class="author-image " src="${auteurImage}" alt="">
        
            <div>
                  <h3>${auteurPrenom}  ${auteurNom}</h3>
                  <p>${auteurRole}</p>
                  <p>${auteurBio}</p>
                  <div> Articles: ${auteurArticles} | Followers: ${auteurFollowers} </div>
            </div>

      </div>`;

        containerAuteurs.insertAdjacentHTML("beforeend", auteursCard);

      });


      // TODO 7: REMPLIR LE BOUTON CALL TO ACTION

      let ctaLabel = data.cta.label
      let ctaText = data.cta.text
      console.log(ctaText);
      let ctaHtml = `<div>
        <p id="call-to-action">${ctaText}</p> 
        <button class="cta-button">${ctaLabel}</button>
      </div>
        `

      let containerCTA = document.getElementById("call-to-action")
      containerCTA.insertAdjacentHTML("beforeend", ctaHtml)

      /// FIN DU CODE
    })
    .catch((error) => console.error('Erreur lors de la lecture des données :', error));
}

getData();

// BONUS:
// Alert quand on appuie sur le bouton CTA
// Fonction de filtrage par thème
// Classer les articles par popularité ou notation

