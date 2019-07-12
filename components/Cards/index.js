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

axios.get('https://lambda-times-backend.herokuapp.com/articles')
	.then(result => {
		const articleCategories = result.data.articles;
		const articlesAll = []
		for (category in articleCategories) {
			articleCategories[category].forEach(article => articlesAll.push(article));
		}
		// console.log(articlesAll);
		// All of the articles are all in a single array called articlesAll.

		// 
		
	})
	.catch(error => {
		console.log('Can\'t find server try again later', error);
	})

function cardMarkup(cardElement) {
	// create html elements:
	const card = document.createElement('div');
	const headLine = document.createElement('div');
	const authorContainer = document.createElement('div');
	const imgContainer = document.createElement('div');
	const authorImage = document.createElement('img');
	const authorName = document.createElement('span');

	// Assign class names:
	card.className = 'card';
	headLine.className = 'headline';
	authorContainer.className = 'author';
	imgContainer.className = 'img-container';

	// Assign text content and attributes:
	authorImage.src = cardElement.authorPhoto;
	headLine.textContent = cardElement.headline;
	authorName.textContent = `By ${cardElement.authorName}`;

	// assembling html tree structure:
	card.appendChild(headLine);
	card.appendChild(authorContainer);

	authorContainer.appendChild(imgContainer);
	authorContainer.appendChild(authorName);

	imgContainer.appendChild(authorImage);

	return card; 

}

// function markup test with one object:
// const testObject = {
// 	authorName: "FIDO WALKSALOT",
// 	authorPhoto: "./assets/fido.jpg",
// 	headline: "Bootstrap 5: Get a Sneak Peak at all the New Features"
// };

// console.log(cardMarkup(testObject));
// function test was a success! 
