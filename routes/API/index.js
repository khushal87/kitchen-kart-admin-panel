const route = require('express').Router();
const userRoute = require('./users.js');
const ordersRoute = require('./orders.js');
const orderinfoRoute = require('./order.js');

route.get('/', function(req, res){
    res.send('API Route working....');
})
route.use('/users', userRoute.route);
route.use('/orders', ordersRoute.route);
route.use('/order/', orderinfoRoute.route);

exports = module.exports = {route}