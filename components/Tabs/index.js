// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

// find the parent of the topic div layers:
const topics = document.querySelector('.topics');
console.log(topics);

// The axios call to get the topic data from the server:

axios.get('https://lambda-times-backend.herokuapp.com/topics')
	.then(response => {
		console.log(response.data.topics);

		const topicsArray = response.data.topics;

		const topicsMarkupArray = topicsArray.map(topic => topicMarkup(topic));

		console.log(topicsMarkupArray); // topicMarkup returns div layers.

		topicsMarkupArray.forEach(topic => topics.appendChild(topic));
	})

	.catch(error => {
		console.log('Response not found', error);
	})

// html markup function:

function topicMarkup(topic) {

	// create html div markup for each topic:
	const topicDiv = document.createElement('div');

	// append className:
	topicDiv.className = 'topic';

	// create the text content:
	topicDiv.textContent = topic;

	return topicDiv;
}

