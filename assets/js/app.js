const baseUrl = 'https://api.github.com'; // this is not an endpoint, renamed baseEndpoint to baseURL
const usersEndpoint = `${baseUrl}/users`;

/*
Use descriptive variable names
This is not jQuery, better not use $ as identifier for variable names

$n --> userName		("name" is in this case is not descriptive enoug and may cause confussion/conflict with deprecated browser global "name" variable)
$b --> blog
$l --> userLocation	("location" is reserved keyword)

*/
const userName = document.querySelector('.name'); // changed to class selector
const blog = document.querySelector('.blog'); // changed to class selector
const userLocation = document.querySelector('.location'); // There is no element with "location" class, created a p.location in the HTML

async function displayUser(username) { 	// added needed `async` keyword

	// try catch block for better practices
	try {
		userName.textContent = 'cargando...';
		const response = await fetch(`${usersEndpoint}/${username}`);
		const data = await response.json();	// data was previously never defined, defined it as parsed JSON response
		console.log(data);

		// changed single quotes to backticks to use template literals
		userName.textContent = `${data.name}`;
		blog.textContent = `${data.blog}`;
		userLocation.textContent = `${data.location}`;
	} catch (error) {
		handleError(error);
	}

}

function handleError(err) {
	console.log('OH NO!');
	console.log(err);
	userName.textContent = `Algo salió mal: ${err}`;
}

// no need to add a .catch() here becasue we're not rethrowing error (that would be an antipattern if using try/catch)
// either use async-await with try/or .catch, .then
displayUser('stolinski');


/* 
There are some console.logs in the code, which is usually not intended in production,
but I assume in this case they're meant to be there 
*/