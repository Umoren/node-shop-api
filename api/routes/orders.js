const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'You are welcome to the orders route. GET something'
    })
})

router.post('/', (req, res, next) => {
    const order = {
        productId: req.body.productId,
        quantity: req.body.quantity
    }

    res.status(201).json({
        message: 'You are welcome to the orders route. POST something',
        order: order
    })
})

router.get('/:ordersId', (req, res, next) => { 
    const id = req.params.ordersId;
    if (id === 'special'){
        res.status(200).json({
            message: 'This is for special people',
            id: id
        })
    } else {
        res.status(200).json({
            message: 'You have entered a random id'
        })
    }
})

router.delete('/:ordersId', (req, res, next) => {
    res.json({
        message: 'You have deleted something'
    })
})

module.exports = router;

