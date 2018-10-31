const express = require('express');
const OktaJwtVerifier = require('@okta/jwt-verifier')
const OktaClient = require('../../lib/OktaClient');

const users = require('./usersModel.js');

const router = express.Router();

router.get('/users', (req, res) => {
  users
    .find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      res.status(500).json(err.message);
    });
});

router.get('/users/:username', (req, res) => {
  const { username } = req.params;
  users
    .findByUsername(username)
    .then(user => {
      if (user) {
        res.status(200).json(user);
      } else {
        res
          .status(404)
          .json({ message: `No user found to get, by the supplied username.` });
      }
    })
    .catch(err => {
      res.status(500).json({ ErrorMessage: err.message });
    });
});

router.post('/users', (req, res) => {
  const user = req.body;

  users
    .addUser(user)
    .then(username => {
      res.status(201).json(username);
    })
    .catch(err => {
      res.status(500).json({ ErrorMessage: err.message });
    });
});

/** Registers a new user through Okta */
router.post('/register', (req, res, next) => {
  if (!req.body) return res.sendStatus(400);
  const newUser = {
    profile: {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      login: req.body.email
    },
    credentials: {
      password: {
        value: req.body.password
      }
    }
  };
  oktaClient
    .createUser(newUser)
    .then(user => {
      res.status(201);
      res.send(user);
    })
    .catch(err => {
      res.status(400);
      res.send(err);
    });
});

router.put('/users/:username', (req, res) => {
  const { username } = req.params;
  const user = req.body;

  users
    .updateUser(username, user)
    .then(userUpdatedCount => {
      if (userUpdatedCount > 0) {
        res.status(20).json(userUpdatedCount);
      } else {
        res.status(404).json({
          message: `No user found to update, by the supplied username; or username was not supplied.`,
        });
      }
    })
    .catch(err => {
      res.status(500).json({ ErrorMessage: err.message });
    });
});

router.delete('/users/:username', (req, res) => {
  const { username } = req.params;

  users
    .removeUser(username)
    .then(count => {
      if (count > 0) {
        res.status(200).json(count);
      } else {
        res.status(404).json({
          message: `No user found to remove, by the supplied username.`,
        });
      }
    })
    .catch(err => {
      res.status(500).json({ ErrorMessage: err.message });
    });
});

module.exports = router;
