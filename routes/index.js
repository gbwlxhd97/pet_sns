var express = require('express');
var router = express.Router();

router.get('/', (req,res) => {
  res.render('index',{ postList: [] }); //index.ejs 랜더링시켜주기
});

module.exports = router;
