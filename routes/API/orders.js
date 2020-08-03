const route = require('express').Router()
const fetch = require('node-fetch');

route.get("/", function (req, res) {
  fetch(
    `http://ec2-13-232-236-5.ap-south-1.compute.amazonaws.com:3000/api/orders/`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      res.send(json['response']);
    });
});

exports = module.exports = { route }