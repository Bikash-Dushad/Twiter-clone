const express = require('express')
const router = express.Router();
const homecontroller = require('../controllers/homecontroller')


router.get('/homepage', homecontroller.homepage);
router.post('/addtext', homecontroller.addtext);
router.get('/deletetext/:id', homecontroller.deletetext)
router.post('/updatetext/:id', homecontroller.updatetext);
module.exports = router;