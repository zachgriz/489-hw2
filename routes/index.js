var express = require('express');
var router = express.Router();
const Signature = require('../models/Signature')

/* GET home page. */
router.get('/', async function(req, res, next) {
  const signatures = await Signature.findAll()
  res.render('index', { signatures: signatures });
});

router.post('/sign', async function(req, res, next) {
  let fullname = req.body.fullname
  let city = req.body.city
  
  try {
    const signature = await Signature.create({
      fullname: fullname,
      city: city
    })
    res.redirect('/?msg=success&fullname='+signature.fullname+'&city='+signature.city)
  } catch (err) {
    res.redirect('/?msg='+ new URLSearchParams(err.message).toString()+ '&fullname='+signature.fullname+'&city='+signature.city)
  }
})
module.exports = router;
