const route = require("express").Router();
const fetch = require('node-fetch');

route.get("/", function (req, res) {
  fetch(
    `http://ec2-13-232-236-5.ap-south-1.compute.amazonaws.com:3000/api/users/`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      res.send(json['response']);
    });
});

route.post('/', function(req, res){
  const userId = req.body.userid;
  fetch(`http://ec2-13-232-236-5.ap-south-1.compute.amazonaws.com:3000/api/users/`).then((response)=>{
    return response.json();
  }).then((json)=>{
    let user_arr = json['response'];
    let result = [];
    for(let i = 0; i<user_arr.length;i++){
      if(user_arr[i]['user_id'] == userId){
        result.push(user_arr[i]);
        res.render('userinfo', {userId, result});
      }
    }
  })
})

exports = module.exports = { route };
