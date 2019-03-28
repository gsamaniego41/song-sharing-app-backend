const express = require("express");
const router = express.Router();
const knex = require("knex");

const knexConfig = require("../knexfile");
const db = knex(knexConfig.development);

router.get("/", (req, res) => {
  db("users")
    .then(users => res.status(200).json(users))
    .catch(err => res.status(500).json(err));
});

router.get("/:id", (req, res) => {
  const {id} = req.params;
  db("users")
    .where({id})
    .then(user => {
      if (user.length > 0) {
        res.status(200).json(user);
      } else {
        res.status(404).json({msg: "user doesn't exist"});
      }
    })
    .catch(err => res.status(500).json(err));
});

module.exports = router;
