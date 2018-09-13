const express = require('express');
const router = express.Router();
router.get('/test', (req, res) => res.json({ msg: 'Posts Works' }));

router.get('/one' , (req,res) => {
    res.send('ckckck')
})


module.exports = router;