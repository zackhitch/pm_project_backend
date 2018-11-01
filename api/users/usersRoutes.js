const express = require('express');
// const OktaJwtVerifier = require('@okta/jwt-verifier');
const oktaClient = require('../../lib/OktaClient');

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

router.get('/users/:email_address', (req, res) => {
  const { email_address } = req.params;
  users
    .findByEmail(email_address)
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

router.get('/users/id/:id', (req, res) => {
  const { id } = req.params;
  users
    .findByUserId(id)
    .then(user => {
      if (user) {
        res.status(200).json(user);
      } else {
        res
          .status(404)
          .json({ message: `No user found to get, by the supplied user ID.` });
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
    .then(ids => {
      res.status(201).json(ids[0]);
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
      login: req.body.email,
    },
    credentials: {
      password: {
        value: req.body.password,
      },
    },
  };
  oktaClient
    .createUser(newUser)
    .then(user => {
      users
        .addUser(user)
        .then(console.log({ message: `user successfully added to the DB.` }))
        .catch(console.log({ ErrorMessage: `unable to add user to the DB.` }));

      res.status(201).json(user);
    })
    .catch(err => {
      res.status(400).json({ ErrorMessage: err.message });
    });
});

router.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const user = req.body;

  users
    .updateUser(id, user)
    .then(userUpdatedCount => {
      if (userUpdatedCount > 0) {
        res.status(200).json(userUpdatedCount);
      } else {
        res.status(404).json({
          message: `No user found to update, by the supplied user ID; or user was not supplied.`,
        });
      }
    })
    .catch(err => {
      res.status(500).json({ ErrorMessage: err.message });
    });
});

router.delete('/users/:id', (req, res) => {
  const { id } = req.params;

  users
    .removeUser(id)
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
