const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const PORT = 3009;
const apiKey = 'ucBgT9rq_KvWTOoSvuc2gzD6OYRe7mFcaqUrxtKw-aga2ww56MNZrSbeXC4n1cnjf6iGWfQIUiX8XnVBSV3a5GIJGyYnJ_eyidasl9UXQukv0n429MIA-Chf5AMrZHYx';
const endpoint = 'https://api.yelp.com/v3/businesses/search';

// restaurant endpoint
app.get('/api/restaurants', (req, res) => {
  const term = 'restaurants';
  const location = 'Kitsilano, Vancouver';

  axios.get(endpoint, {
    headers: {
      Authorization: `Bearer ${apiKey}`
    },
    params: {
      term,
      location,
      exclude,
    }
  })
  .then(response => {
    // console.log(response.data);
    res.json(response.data);
  })
  .catch(error => {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  });
});

  // seafood endpoint
  app.get('/api/seafood', (req, res) => {
    const term = 'seafood';
    const location = 'Kitsilano, Vancouver';
  
    axios.get(endpoint, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      },
      params: {
        term,
        location,
      }
    })
    .then(response => {
      // console.log(response.data);
      res.json(response.data);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error: 'Internal server error' });
    });
  });

  // mexican endpoint
  app.get('/api/mexican', (req, res) => {
    const term = 'mexican';
    const location = 'Kitsilano, Vancouver';
  
    axios.get(endpoint, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      },
      params: {
        term,
        location,
      }
    })
    .then(response => {
      // console.log(response.data);
      res.json(response.data);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error: 'Internal server error' });
    });
  });

  // canadian endpoint
  app.get('/api/canadian', (req, res) => {
    const term = 'canadian';
    const location = 'Kitsilano, Vancouver';
  
    axios.get(endpoint, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      },
      params: {
        term,
        location,
      }
    })
    .then(response => {
      // console.log(response.data);
      res.json(response.data);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error: 'Internal server error' });
    });
  });

  // bars endpoint
  app.get('/api/bars', (req, res) => {
    const term = 'bars';
    const location = 'Kitsilano, Vancouver';
  
    axios.get(endpoint, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      },
      params: {
        term,
        location,
      }
    })
    .then(response => {
      // console.log(response.data);
      res.json(response.data);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error: 'Internal server error' });
    });
  });

  // delis endpoint
  app.get('/api/delis', (req, res) => {
    const term = 'delis';
    const location = 'Kitsilano, Vancouver';
  
    axios.get(endpoint, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      },
      params: {
        term,
        location,
      }
    })
    .then(response => {
      // console.log(response.data);
      res.json(response.data);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error: 'Internal server error' });
    });
  });

  // cideries endpoint
  app.get('/api/cideries', (req, res) => {
    const term = 'cideries';
    const location = 'Kitsilano, Vancouver';
  
    axios.get(endpoint, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      },
      params: {
        term,
        location,
      }
    })
    .then(response => {
      // console.log(response.data);
      res.json(response.data);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error: 'Internal server error' });
    });
  });

  // karaoke endpoint
  app.get('/api/karaoke', (req, res) => {
    const term = 'karaoke';
    const location = 'Kitsilano, Vancouver';
  
    axios.get(endpoint, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      },
      params: {
        term,
        location,
      }
    })
    .then(response => {
      // console.log(response.data);
      res.json(response.data);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error: 'Internal server error' });
    });
  });
  
  // gastropubs endpoint
  app.get('/api/lounges', (req, res) => {
    const term = 'lounges';
    const location = 'Kitsilano, Vancouver';
  
    axios.get(endpoint, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      },
      params: {
        term,
        location,
      }
    })
    .then(response => {
      // console.log(response.data);
      res.json(response.data);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error: 'Internal server error' });
    });
  });

  // gastropubs endpoint
  app.get('/api/gastropubs', (req, res) => {
    const term = 'gastropubs';
    const location = 'Kitsilano, Vancouver';
  
    axios.get(endpoint, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      },
      params: {
        term,
        location,
      }
    })
    .then(response => {
      // console.log(response.data);
      res.json(response.data);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error: 'Internal server error' });
    });
  });

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
