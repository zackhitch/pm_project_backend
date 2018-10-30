const express = require('express');

const loc = require('./locationsModel.js');

const router = express.Router();

router.get('/locations', (req, res) => {
  loc
    .find()
    .then(locations => {
      res.status(200).json(locations);
    })
    .catch(err => {
      res.status(500).json({ ErrorMessage: err.message });
    });
});

router.get('/locations/city/:city', (req, res) => {
  const { city } = req.params;

  loc
    .findByCity(city)
    .then(locations => {
      if (locations) {
        res.status(200).json(locations);
      } else {
        res
          .status(404)
          .json({ message: `No locations to get, by the supplied city.` });
      }
    })
    .catch(err => {
      res.status(500).json({ ErrorMessage: err.message });
    });
});

router.get('/locations/state/:state', (req, res) => {
  loc
    .findByState(state)
    .then(locations => {
      if (locations) {
        res.status(200).json(locations);
      } else {
        res
          .status(404)
          .json({ message: `No locations to get, by the supplied state.` });
      }
    })
    .catch(err => {
      res.status(500).json({ ErrorMessage: err.message });
    });
});

router.get('/locations/country/:country', (req, res) => {
  loc
    .findByCountry(country)
    .then(locations => {
      if (locations) {
        res.status(200).json(locations);
      } else {
        res
          .status(404)
          .json({ message: `No locations to get, by the supplied country.` });
      }
    })
    .catch(err => {
      res.status(500).json({ ErrorMessage: err.message });
    });
});

router.post('/locations', (req, res) => {
  const location = req.body;

  loc
    .addLocation(location)
    .then(id => {
      if (id > 0) {
        res.status(200).json(id);
      } else {
        res.status(404).json({
          message: `Unable to add location, missing required fields.`,
        });
      }
    })
    .catch(err => {
      res.status(500).json({ ErrorMessage: err.message });
    });
});

router.put('/locations/:id', (req, res) => {
  const { id } = req.params;
  const location = req.body;

  loc
    .updateLocation(id, location)
    .then(locUpdatedCount => {
      if (locUpdatedCount > 0) {
        res.status(200).json(locUpdatedCount);
      } else {
        res.status(404).json({
          message: `No location found to update, by the supplied ID.`,
        });
      }
    })
    .catch(err => {
      res.status(500).json({ ErrorMessage: err.message });
    });
});

router.delete('/locations/:id', (req, res) => {
  const { id } = req.params;

  loc
    .removeLocation(id)
    .then(count => {
      if (count > 0) {
        res.status(200).json(count);
      } else {
        res.status(404).json({
          message: `No location found to remove, by the supplied ID.`,
        });
      }
    })
    .catch(err => {
      res.status(500).json({ ErrorMessage: err.message });
    });
});

module.exports = router;
