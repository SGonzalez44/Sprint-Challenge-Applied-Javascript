// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios
  .get('https://lambda-times-backend.herokuapp.com/articles')
  .then(att => {
    for (let key in att.data.articles) {
      if (att.data.articles.hasOwnProperty(key)) {
        const articleArray = att.data.articles[key];
        articleArray.forEach(article => {
          const cardsContainer = document.querySelector('.cards-container');
          cardsContainer.append(createArticle(article));
        });
      }
    }
  })


    function createArticle(obj) {
       
        const card = document.createElement('div'); 
        card.classList.add('card');

        const headline = document.createElement('div');
        headline.classList.add('headline');
        headline.textContent = obj.headline;

        const author = document.createElement('div');
        author.classList.add('author');

        const imgContainer = document.createElement('div');
        imgContainer.classList.add('img-container');
        
        const image = document.createElement('img');
        image.src = obj.authorPhoto;

        const aName = document.createElement('span');
        aName.textContent = `By ${obj.authorName}`;
      
        
        card.append(headline);
        card.append(author);
        author.append(imgContainer);
        imgContainer.append(image);
        author.append(aName);
      
        return card;
      }