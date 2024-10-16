const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());

const PORT = 3008;
const apiKey = 'ucBgT9rq_KvWTOoSvuc2gzD6OYRe7mFcaqUrxtKw-aga2ww56MNZrSbeXC4n1cnjf6iGWfQIUiX8XnVBSV3a5GIJGyYnJ_eyidasl9UXQukv0n429MIA-Chf5AMrZHYx';
const searchEndpoint = 'https://api.yelp.com/v3/businesses/search';
const reviewsEndpoint = 'https://api.yelp.com/v3/businesses'; // Endpoint for reviews

// Route mappings for terms and locations
const routes = {
	restaurants: 'Kitsilano, Vancouver',
	seafood: 'Kitsilano, Vancouver',
	burgers: 'Kitsilano Vancouver',
	breakfast: 'Kitsilano, Vancouver',
	persian: 'Kitsilano, Vancouver',
	mexican: 'Kitsilano, Vancouver',
	canadian: 'Kitsilano, Vancouver',
	bars: 'Kitsilano, Vancouver',
	pubs: 'Kitsilano, Vancouver',
	australian: 'Downtown, Vancouver',
	'sushi-bars': 'Downtown, Vancouver',
	delis: 'Downtown, Vancouver',
	cideries: 'Downtown, Vancouver',
	karaoke: 'Kitsilano, Vancouver',
	lounges: 'Downtown, Vancouver',
	gastropubs: 'Downtown, Vancouver',
	spanish: 'Downtown, Vancouver',
};

// Function to fetch reviews for a business using its business ID
const getReviews = async (businessId) => {
	try {
		const response = await axios.get(`${reviewsEndpoint}/${businessId}/reviews`, {
			headers: {
				Authorization: `Bearer ${apiKey}`,
			},
		});
		return response.data.reviews;
	} catch (error) {
		console.error(`Error fetching reviews for business ID ${businessId}:`, error.message);
		return [];
	}
};

// Route handler function
const getBusinesses = async (req, res, term, location) => {
	try {
		const response = await axios.get(searchEndpoint, {
			headers: {
				Authorization: `Bearer ${apiKey}`,
			},
			params: {
				term,
				location,
			},
		});

		const businesses = response.data.businesses;

		// Fetch reviews for each business
		const businessesWithReviews = await Promise.all(
			businesses.map(async (business) => {
				const reviews = await getReviews(business.id);
				return {
					...business,
					reviews, // Add reviews to business data
				};
			})
		);

		res.json(businessesWithReviews);
	} catch (error) {
		console.log(error.response.data);
		res.status(500).json({ error: 'Internal server error' });
	}
};

// Dynamically create routes
for (const term in routes) {
	app.get(`/api/${term}`, (req, res) => {
		getBusinesses(req, res, term, routes[term]);
	});
}

// Express server
app.listen(process.env.PORT || PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
