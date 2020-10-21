const express = require('express');
const router = express.Router();
const burger = require('../models/burger');


//Server routes
//GET all burgers for the landing page
router.get('/', (req, res) => {
   burger.all((data) => {
       let burgerObj = {
           burgers: data
       };
       console.log(burgerObj);
       res.render('index', burgerObj);
   });
});

//POST to add a new burger to the list
router.post('/api/burgers', (req, res) => {
    burger.create(['burger_name'], [req.body.burger_name], (result) => {
        console.log(result);
    });
});

//PUT to update the devoured status of the burger
router.put('/api/burgers/:id', (req, res) => {
    let status = 'id =' + req.params.id;
    console.log('status' + status);

    burger.update({devoured: req.body.devoured}, status, (result) => {
        if(result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;
