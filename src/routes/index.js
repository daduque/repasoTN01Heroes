const router = require('express').Router();
const heroesRouter = require('./heroes');
const apiRouter = require('./api/apiRouter');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });


router.use('/', heroesRouter);
router.use('/api', apiRouter);


module.exports = router;
