const route = require('express').Router()
const fetch = require('node-fetch');

route.get("/", function (req, res) {
  fetch(
    `https://api.kitchenkartapp.in/api/orders/`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      res.send(json['response']);
    });
});

exports = module.exports = { route }