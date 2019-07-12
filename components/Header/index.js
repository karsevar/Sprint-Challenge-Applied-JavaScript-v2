// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {

	// Creating html markup
	const header = document.createElement('div');
	const date = document.createElement('span');
	const lambdaHeader = document.createElement('h1');
	const temp = document.createElement('span');

	// appending class names to markup:
	header.className = 'header';
	date.className = 'date';
	lambdaHeader.className = 'temp';

	// Creating html structure:
	header.appendChild(date);
	header.appendChild(lambdaHeader);
	header.appendChild(temp);

	// Adding text content:
	date.textContent = 'SMARCH 28, 2019';
	lambdaHeader.textContent = 'Lambda Times';
	temp.textContent = '98 degrees';

	return header;

}

// selecting .headerContainer parent;
const headerContainer = document.querySelector('.header-container');

// appending Header() markup function return elements to .header-container
headerContainer.appendChild(Header());
