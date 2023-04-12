const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const PORT = 3006;
const apiKey = 'ucBgT9rq_KvWTOoSvuc2gzD6OYRe7mFcaqUrxtKw-aga2ww56MNZrSbeXC4n1cnjf6iGWfQIUiX8XnVBSV3a5GIJGyYnJ_eyidasl9UXQukv0n429MIA-Chf5AMrZHYx';
const endpoint = 'https://api.yelp.com/v3/businesses/search';



// const endpoints = [
//   { term: 'seafood', location: 'Kitsilano, Vancouver' },
//   { term: 'restaurants', location: 'Kitsilano, Vancouver' },
//   { term: 'bars', location: 'Kitsilano, Vancouver' },
//   // add more endpoints here
// ];

// const requests = endpoints.map((endpoint) => {
//   return axios.get(apiUrl, {
//     headers: { Authorization: `Bearer ${apiKey}` },
//     params: endpoint,
//   });
// });


const getBusinesses = (req, res, term, location) => {
  axios.get(endpoint, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
    params: {
      term,
      location,
    },
  })
  .then(response => res.json(response.data))
  .catch(error => {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  });
};

app.get('/api/restaurants', (req, res) => {
  const term = 'restaurants';
  const location = 'Kitsilano, Vancouver';
  getBusinesses(req, res, term, location);
});

app.get('/api/seafood', (req, res) => {
  const term = 'seafood';
  const location = 'Kitsilano, Vancouver';
  getBusinesses(req, res, term, location);
});

app.get('/api/breakfast-brunch', (req, res) => {
  const term = 'breakfast-brunch';
  const location = 'Downtown, Vancouver';
  getBusinesses(req, res, term, location);
});

app.get('/api/burgers', (req, res) => {
  const term = 'burgers';
  const location = 'Kitsilano Vancouver';
  getBusinesses(req, res, term, location);
});

app.get('/api/persian', (req, res) => {
  const term = 'persian';
  const location = 'Kitsilano, Vancouver';
  getBusinesses(req, res, term, location);
});

app.get('/api/mexican', (req, res) => {
  const term = 'mexican';
  const location = 'Kitsilano, Vancouver';
  getBusinesses(req, res, term, location);
});

app.get('/api/canadian', (req, res) => {
  const term = 'canadian';
  const location = 'Kitsilano, Vancouver';
  getBusinesses(req, res, term, location);
});

app.get('/api/bars', (req, res) => {
  const term = 'bars';
  const location = 'Downtown, Vancouver';
  getBusinesses(req, res, term, location);
});

app.get('/api/pubs', (req, res) => {
  const term = 'pubs';
  const location = 'Downtown, Vancouver';
  getBusinesses(req, res, term, location);
});

app.get('/api/australian', (req, res) => {
  const term = 'australian';
  const location = 'Downtown, Vancouver';
  getBusinesses(req, res, term, location);
});

app.get('/api/dive-bars', (req, res) => {
  const term = 'dive-bars';
  const location = 'Downtown, Vancouver';
  getBusinesses(req, res, term, location);
});

app.get('/api/delis', (req, res) => {
  const term = 'delis';
  const location = 'Downtown, Vancouver';
  getBusinesses(req, res, term, location);
});

app.get('/api/cideries', (req, res) => {
  const term = 'cideries';
  const location = 'Downtown, Vancouver';
  getBusinesses(req, res, term, location);
});

app.get('/api/karaoke', (req, res) => {
  const term = 'karaoke';
  const location = 'Downtown, Vancouver';
  getBusinesses(req, res, term, location);
});

app.get('/api/lounges', (req, res) => {
  const term = 'lounges';
  const location = 'Downtown, Vancouver';
  getBusinesses(req, res, term, location);
});

app.get('/api/gastropubs', (req, res) => {
  const term = 'gastropubs';
  const location = 'Downtown, Vancouver';
  getBusinesses(req, res, term, location);
});

app.get('/api/spanish', (req, res) => {
  const term = 'spanish';
  const location = 'Downtown, Vancouver';
  getBusinesses(req, res, term, location);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
