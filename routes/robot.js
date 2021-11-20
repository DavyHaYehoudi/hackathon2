const express = require('express');
const router = express.Router();

const robotCtrl = require('../controllers/robot');

router.get('/', robotCtrl.getAllRobots);
router.get('/:id', robotCtrl.getOneRobot);
router.post('/order', robotCtrl.orderRobots);

module.exports = router;