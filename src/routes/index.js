const router = require('express').Router();
const heroesRouter = require('./heroes');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });


router.use('/', heroesRouter);


module.exports = router;
