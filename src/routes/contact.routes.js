const router = require('express').Router();
const contactController = require('../controllers/contact.controller');

router.post('/add', contactController.addContactDetail);

module.exports = router;