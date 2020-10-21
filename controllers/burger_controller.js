const express = require('express');
const router = express.Router();
const burger = require('../models/burger');


//Server routes
router.get('/', (req, res) => {
   burger.all((data) => {
       let burgerObj = {
           burgers: data
       };
       console.log(burgerObj);
       res.render('index', burgerObj);
   });
});

// router.post('api/burgers', (req, res) => {
    
// });

// router.put('/api/burgers/:id', (req, res) => {

// })

module.exports = router;
