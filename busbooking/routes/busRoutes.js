const express = require('express');
const router = express.Router();
const busController = require('../controllers/busController');

// POST /buses → Add a new bus
router.post('/', busController.addBus);

// GET /buses/available/:seats → Get buses with more than :seats seats
router.get('/available/:seats', busController.getAvailableBuses);

module.exports = router;
