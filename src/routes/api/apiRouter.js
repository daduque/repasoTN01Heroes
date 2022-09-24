const router = require('express').Router();
const { getAllHeroes } = require('../../controllers/api/ApiHeroController');

router.get('/heroes', getAllHeroes);

module.exports = router;