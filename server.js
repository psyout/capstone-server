const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());

const PORT = 3008;
const apiKey = 'ucBgT9rq_KvWTOoSvuc2gzD6OYRe7mFcaqUrxtKw-aga2ww56MNZrSbeXC4n1cnjf6iGWfQIUiX8XnVBSV3a5GIJGyYnJ_eyidasl9UXQukv0n429MIA-Chf5AMrZHYx';
const endpoint = 'https://api.yelp.com/v3/businesses/search';

// Route mappings for terms and locations
const routes = {
	restaurants: 'Kitsilano, Vancouver',
	seafood: 'Kitsilano, Vancouver',
	'breakfast-brunch': 'Downtown, Vancouver',
	burgers: 'Kitsilano Vancouver',
	persian: 'Kitsilano, Vancouver',
	mexican: 'Kitsilano, Vancouver',
	canadian: 'Kitsilano, Vancouver',
	bars: 'Downtown, Vancouver',
	pubs: 'Kitsilano, Vancouver',
	australian: 'Downtown, Vancouver',
	'dive-bars': 'Downtown, Vancouver',
	delis: 'Downtown, Vancouver',
	cideries: 'Downtown, Vancouver',
	karaoke: 'Kitsilano, Vancouver',
	lounges: 'Downtown, Vancouver',
	gastropubs: 'Downtown, Vancouver',
	spanish: 'Downtown, Vancouver',
};

// Route handler function
const getBusinesses = (req, res, term, location) => {
	axios
		.get(endpoint, {
			headers: {
				Authorization: `Bearer ${apiKey}`,
			},
			params: {
				term,
				location,
			},
		})
		.then((response) => res.json(response.data))
		.catch((error) => {
			console.log(error.response.data);
			res.status(500).json({ error: 'Internal server error' });
		});
};

// Dynamically create routes
for (const term in routes) {
	app.get(`/api/${term}`, (req, res) => {
		getBusinesses(req, res, term, routes[term]);
	});
}

// Express server
app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
