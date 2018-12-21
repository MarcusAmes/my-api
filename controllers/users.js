const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  all: (req, res) => {
    knex('users')
    .then(users => res.json(users))
  },
  one: (req, res) => {
    knex('users').where('id', req.params.id)
    .then(user => res.json(user[0]))
  },
  add: (req, res) => {
    const { first_name, last_name, email, password } = req.body
    knex('users').insert({
      first_name,
      last_name,
      email,
      password
    }, '*')
    .then(user => res.json(user[0]))
  }
}