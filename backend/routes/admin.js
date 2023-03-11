var express = require('express');
var router = express.Router();
var adminHelpers = require('../Helpers/adminHelpers');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/signup',(req,res)=>{
  var user = req.body;
  adminHelpers.DoSignup(user)
})

module.exports = router;
